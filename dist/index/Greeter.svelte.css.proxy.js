// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Greeter.svelte-1f97r2g{display:flex;height:100vh;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))}.row.svelte-1f97r2g{display:flex;height:75%;flex-direction:column;padding:2rem}@media(min-width: 768px){.row.svelte-1f97r2g{height:33.333333%}.row.svelte-1f97r2g{flex-direction:row}}svg.svelte-1f97r2g{height:auto;width:100%;padding:1rem}@media(min-width: 768px){svg.svelte-1f97r2g{margin:2rem}svg.svelte-1f97r2g{height:75%}svg.svelte-1f97r2g{width:auto}svg.svelte-1f97r2g{padding:0px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}