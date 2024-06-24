import { store, intercept } from "@neptune";
import { getMediaURLFromID } from "@neptune/utils";
import { Presence } from "discord-rpc";
import { html } from "@neptune/voby";

import { DiscordRPC } from "./DiscordRPC";

// @ts-expect-error Types dont include @plugin
import { storage } from "@plugin";

import { SwitchSetting } from "./SwitchSetting";
import { MediaItem } from "neptune-types/tidal";

const rpcClient = new DiscordRPC("1130698654987067493");

const STR_MAX_LEN = 127;
const formatLongString = (s?: string) => {
	if (s === undefined) return "";
	return s.length >= STR_MAX_LEN ? s.slice(0, STR_MAX_LEN - 3) + "..." : s;
};

enum AudioQuality {
	HiRes = "HI_RES_LOSSLESS",
	MQA = "HI_RES",
	High = "LOSSLESS",
	Low = "HIGH",
	Lowest = "LOW",
}
interface PlaybackContext {
	actualAssetPresentation: string;
	actualAudioMode: string;
	actualAudioQuality: AudioQuality;
	actualDuration: number;
	actualProductId: string;
	actualStreamType: unknown;
	actualVideoQuality: unknown;
	assetPosition: number;
	bitDepth: number | null;
	codec: string;
	playbackSessionId: string;
	sampleRate: number | null;
}
const unloadTimeUpdate = intercept("playbackControls/TIME_UPDATE", ([current]) => {
	updateRPC(current);
});

const updateRPC = async (currentTime?: number) => {
	const {
		content,
		playbackControls: { playbackContext, playbackState, latestCurrentTime },
	} = store.getState();
	currentTime ??= latestCurrentTime;

	const mediaItemId = (<PlaybackContext | null | undefined>playbackContext)?.actualProductId;
	if (mediaItemId === undefined) return;

	const mediaItem = (<Record<number, MediaItem>>content.mediaItems)[+mediaItemId];
	if (mediaItem?.type !== "track") return;

	const currentlyPlaying = mediaItem.item;

	const _rpcClient = await rpcClient.ensureRPC().catch((err) => console.error("Failed to connect to DiscordRPC", err));
	if (_rpcClient === undefined) return;

	const activityState: Presence = {
		buttons: [],
	};
	if (currentlyPlaying.url) activityState.buttons?.push({ url: currentlyPlaying.url, label: "Play" });

	// Pause indicator
	if (playbackState === "NOT_PLAYING") {
		if (storage.keepRpcOnPause === false) return _rpcClient.clearActivity();
		activityState.smallImageKey = "paused-icon";
		activityState.smallImageText = "Paused";
	} else if (currentlyPlaying.duration !== undefined && currentTime !== undefined) {
		// Playback/Time
		activityState.startTimestamp = Math.floor(Date.now() / 1000);
		activityState.endTimestamp = Math.floor((Date.now() + (currentlyPlaying.duration - currentTime) * 1000) / 1000);
	}

	// Album
	if (currentlyPlaying.album !== undefined) {
		activityState.largeImageKey = getMediaURLFromID(currentlyPlaying.album.cover);
		activityState.largeImageText = formatLongString(currentlyPlaying.album.title);
	}

	// Title/Artist
	const artist = `by ${currentlyPlaying?.artist?.name ?? currentlyPlaying.artists?.[0]?.name ?? "Unknown Artist"}`;
	const desc = `${currentlyPlaying.title} ${artist}`;
	if (desc.length >= 32) {
		activityState.details = formatLongString(currentlyPlaying.title);
		activityState.state = formatLongString(artist);
	} else {
		activityState.details = formatLongString(desc);
	}

	return _rpcClient.setActivity(activityState);
};

export async function onUnload() {
	unloadTimeUpdate();
	await rpcClient.cleanp();
}
updateRPC();

storage.keepRpcOnPause ??= false;
export function Settings() {
	return html` <${SwitchSetting} checked=${storage.keepRpcOnPause} onClick=${() => (storage.keepRpcOnPause = !storage.keepRpcOnPause)} title="Keep RPC on pause" /> `;
}
