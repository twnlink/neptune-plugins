import { intercept } from "@neptune";
import { getState } from "@neptune/store";
import { setFlags } from "@neptune/actions/featureFlags";
import { html, For } from "@neptune/voby";
import { storage } from "@plugin";

function setFlag(flagName, value) {
  setFlags({
    flags: [
      {
        name: flagName,
        type: "BOOLEAN",
        value,
      },
    ],
  });
}

// This ensures that we activate flags at the correct time.
intercept("featureFlags/GET_FLAGS", () => {
  Object.entries(storage).forEach(([n, v]) => setFlag(n, v));
});

export function onUnload() {
  Object.keys(storage).forEach((n) => setFlag(n, false));
}

export function Settings() {
  const {
    featureFlags: { flags },
  } = getState();

  const booleanFlags = Object.values(flags)
    .filter((f) => f.type == "BOOLEAN")
    .map((f) => f.name);

  return html`<div>
    <${For} values=${booleanFlags}>
      ${(name) =>
        html`<div style="display:flex;justify-content:space-between">
          <label for=${name}>${name}</label>
          <input
            id=${name}
            type="checkbox"
            checked=${() => storage[name]}
            onChange=${() => (storage[name] = !storage[name])}
          />
        </div>`}
    </${For}>
  </div>`;
}
