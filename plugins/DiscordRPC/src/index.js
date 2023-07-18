import { store, intercept } from "@neptune";
import { getMediaURLFromID } from "@neptune/utils";
import { AutoClient } from "discord-auto-rpc";

const unloadables = [];
const clientId = "1130698654987067493";

const rpc = new AutoClient({ transport: "ipc" });

// TODO: Add pause support
const paused = {
  details: `Browsing TIDAL`,
  largeImageKey: "tidal-logo",
  largeImageText: `TIDAL`,
  instance: false,
};

const formatLongString = (s) => (s.length >= 128 ? s.slice(0, 125) + "..." : s);

const client = rpc.endlessLogin({ clientId });

client.then(() => {
  rpc.setActivity(paused);

  unloadables.push(
    intercept("playbackControls/TIME_UPDATE", ([current]) => {
      const state = store.getState();

      const { item: currentlyPlaying, type: mediaType } =
        state.content.mediaItems.get(
          state.playbackControls.mediaProduct.productId
        );

      // TODO: add video support
      if (mediaType != "track") return;
      const playing = state.playbackControls.playbackState == "PLAYING";

      if (!playing) {
        rpc.setActivity(paused);

        return;
      }

      const albumArtURL = getMediaURLFromID(currentlyPlaying.album.cover);

      const date = new Date();
      const now = (date.getTime() / 1000) | 0;
      const remaining = date.setSeconds(
        date.getSeconds() + (currentlyPlaying.duration - current)
      );

      rpc.setActivity({
        details: formatLongString(currentlyPlaying.title),
        state: formatLongString(
          "by " + currentlyPlaying.artists.map((a) => a.name).join(", ")
        ),
        startTimestamp: now,
        endTimestamp: remaining,
        largeImageKey: albumArtURL,
        largeImageText: formatLongString(currentlyPlaying.album.title),
      });
    })
  );
});

export async function onUnload() {
  const resolvedClient = await client;
  unloadables.forEach((u) => u());

  try {
    resolvedClient.clearActivity();
    resolvedClient.destroy();
  } catch {}
}
