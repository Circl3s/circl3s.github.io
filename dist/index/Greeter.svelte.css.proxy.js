// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Greeter.svelte-1j3akls{display:flex;height:100vh;width:100%;flex-direction:column;align-items:center;justify-content:center}.row.svelte-1j3akls{display:flex;height:75%;flex-direction:column;padding:2rem}@media(min-width: 768px){.row.svelte-1j3akls{height:33.333333%}.row.svelte-1j3akls{flex-direction:row}}svg.svelte-1j3akls{height:auto;width:100%;padding:1rem}@media(min-width: 768px){svg.svelte-1j3akls{margin:2rem}svg.svelte-1j3akls{height:75%}svg.svelte-1j3akls{width:auto}svg.svelte-1j3akls{padding:0px}}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}