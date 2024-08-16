import { appendStyle } from "@neptune/utils";
import { intercept } from "@neptune";
import { dispatch } from "@neptune/store";
import { addUnloadable } from "@plugin";
import { openConnect, closeConnect } from "./desktop.native";

const bannerId = "twnlink-desktopconnect-banner";
const removeBannerStyles = appendStyle(`
#${bannerId} {
  text-align: center;
  min-height: 35px;
  width: 100vw;
  background-color: var(--wave-color-opacity-accent-fill-ultra-thick);
  display: grid;
  place-items: center;
}

#${bannerId}[hidden] {
  display: none;
}`);

let bannerElement;

openConnect();
if (!window.ranRemoteDesktopRootSaga) {
  setTimeout(() => {
    const sagaCtx = (() => {
      for (const m of neptune.modules) {
        if (!m?.exports) continue;
        const found = Object.values(m.exports).find(
          (v) => v?.setContext && v?.run
        );
        if (found) return found;
      }
    })();

    const rootSaga = neptune.modules.find(
      (m) => m?.exports && m?.exports?.rootSaga
    )?.exports.rootSaga;

    const remoteDesktopRootSaga = (() => {
      let ranSaga = rootSaga();

      let value;
      while (!value?.done && value?.value?.type != "CALL") {
        value = ranSaga.next();
      }

      return ranSaga.next(true).value;
    })().payload.fn;

    sagaCtx.run(remoteDesktopRootSaga);
    window.ranRemoteDesktopRootSaga = true;
  }, 1500);
}

let progressInterval = setInterval(() => {
  if (!beingControlled) return;

  // This isn't how the official implementation does it, but it's how I do it :D
  nativeInterface.remoteDesktop.onProgressUpdated(
    parseInt(progressBar.getAttribute("aria-valuenow")) * 1000
  );
}, 1000);

let beingControlled = false;
addUnloadable(
  intercept("remotePlayback/remoteDesktop/STATE_CHANGED", ([payload]) => {
    if (!bannerElement) {
      document.querySelector(`div[class^="bar--"]`).insertAdjacentHTML(
        "afterend",
        `
    <div hidden id="${bannerId}">
      <div>
        The player is currently being controlled by TIDAL Connect.
      </div>
    </div>`
      );

      bannerElement = document.getElementById(bannerId);
    }

    beingControlled = payload != 0;

    if (beingControlled) {
      bannerElement.removeAttribute("hidden");
    } else {
      bannerElement.setAttribute("hidden", "");
    }
  })
);

export function onUnload() {
  clearInterval(progressInterval)
  closeConnect();
  dispatch({ type: "remotePlayback/remoteDesktop/STATE_CHANGED", payload: 0 });
  bannerElement?.remove?.();
  removeBannerStyles();
}
