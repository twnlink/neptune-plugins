import { intercept } from "@neptune";
import { getState } from "@neptune/store";
import { appendStyle } from "@neptune/utils";

const tagMap = {
  HIRES_LOSSLESS: "HiRes",
  MQA: "MQA",
  DOLBY_ATMOS: "Atmos"
}

const colorMap = {
  HIRES_LOSSLESS: "#499690",
  MQA: "#e6c200",
  DOLBY_ATMOS: "#0052a3"
}

const unloadables = [
  intercept("favorites/SET_FAVORITE_IDS", () => {
    const state = getState();
    const trackElements = document.querySelectorAll("[data-track-id]");

    for (const trackElem of trackElements) {
      if (trackElem.querySelector(".qualitytags--tags")) continue;
      const trackId = trackElem.getAttribute("data-track-id");
      const { tags } = state.content.mediaItems.get(trackId).item.mediaMetadata;

      const tagContainer = document.createElement("div");
      tagContainer.className = "qualitytags--tags";

      trackElem
        .querySelector(`[data-test="table-row-title"] [data-id="${trackId}"]`)
        .parentElement.appendChild(tagContainer);

      for (const tag of tags) {
        if (tag == "LOSSLESS") continue;

        tagContainer.insertAdjacentHTML(
          "beforeend",
          `<div style="background-color:${colorMap[tag]}">${tagMap[tag]}</div>`
        );
      }
    }
  }),
  appendStyle(
    `.qualitytags--tags{display:flex;padding-left:5px;gap:5px}.qualitytags--tags div{border-radius:500px!important;height:10px;padding:5px 10px;line-height:10px;color:#000}`
  ),
];

export const onUnload = () => unloadables.forEach((u) => u());
