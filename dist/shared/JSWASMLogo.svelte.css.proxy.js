// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Logo.svelte-fc9nyz{margin:1rem;display:flex;flex-direction:row}@media(min-width: 768px){.Logo.svelte-fc9nyz{flex-direction:column}}.img.svelte-fc9nyz{min-height:8rem;min-width:8rem;height:8rem;width:8rem}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}