import { appendStyle } from "@neptune/utils";
import { intercept } from "@neptune";

const unloadables = [];

unloadables.push(
  intercept(
    [
      "interruptions/QUEUE_INTERRUPTION",
      "interruptions/ADD_ITEMS_TO_INTERRUPTIONS_ARRAY",
    ],
    () => true
  ),
  appendStyle(
    `[class*="sidebarUpgrade--"],[data-test^="streaming-audio-quality-"][class*="selectItemIsDisabled--"]{display:none!important}`
  )
);

export const onUnload = () => unloadables.forEach((u) => u());
