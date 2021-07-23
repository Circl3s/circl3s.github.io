// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Logo.svelte-j7fy03{margin:1rem;display:flex;flex-direction:row\n}@media(min-width: 768px){.Logo.svelte-j7fy03{flex-direction:column\n    }}img.svelte-j7fy03{height:8rem;width:8rem\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}