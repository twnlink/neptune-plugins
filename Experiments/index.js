import{intercept as l}from"@neptune";import{getState as c}from"@neptune/store";import{setFlags as a}from"@neptune/actions/featureFlags";import{html as n,For as s}from"@neptune/voby";import{storage as o}from"@plugin";function i(t,r){a({flags:[{name:t,type:"BOOLEAN",value:r}]})}l("featureFlags/GET_FLAGS",()=>{Object.entries(o).forEach(([t,r])=>i(t,r))},!0);function d(){Object.keys(o).forEach(t=>i(t,!1))}function f(t){o[t]=!o[t],i(t,o[t])}function F(){let{featureFlags:{flags:t}}=c(),r=Object.values(t).filter(e=>e.type=="BOOLEAN").map(e=>e.name);return n`<div>
    <${s} values=${r}>
      ${e=>n`<div style="display:flex;justify-content:space-between">
          <label for=${e}>${e}</label>
          <input
            id=${e}
            type="checkbox"
            checked=${()=>o[e]}
            onChange=${()=>f(e)}
          />
        </div>`}
    </${s}>
  </div>`}export{F as Settings,d as onUnload};
