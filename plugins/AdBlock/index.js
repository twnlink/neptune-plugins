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
    `[class*="sidebarUpgrade--"],[class*="field--"]:has([class*="disableUnderline--"]){display:none!important}`
    )
);

export const onUnload = () => unloadables.forEach((u) => u());
