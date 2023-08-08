import{intercept as i}from"@neptune";import{getState as f}from"@neptune/store";import{setFlags as n}from"@neptune/actions/featureFlags";import{html as a,For as l}from"@neptune/voby";import{storage as r}from"@plugin";function s(e,o){n({flags:[{name:e,type:"BOOLEAN",value:o}]})}i("featureFlags/GET_FLAGS",()=>{Object.entries(r).forEach(([e,o])=>s(e,o))});function $(){Object.keys(r).forEach(e=>s(e,!1))}function b(){let{featureFlags:{flags:e}}=f(),o=Object.values(e).filter(t=>t.type=="BOOLEAN").map(t=>t.name);return a`<div>
    <${l} values=${o}>
      ${t=>a`<div style="display:flex;justify-content:space-between">
          <label for=${t}>${t}</label>
          <input
            id=${t}
            type="checkbox"
            checked=${()=>r[t]}
            onChange=${()=>r[t]=!r[t]}
          />
        </div>`}
    </${l}>
  </div>`}export{b as Settings,$ as onUnload};
