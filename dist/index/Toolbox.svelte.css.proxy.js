// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Toolbox.svelte-kzgvst{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;padding:2rem\n}@media(min-width: 768px){.Toolbox.svelte-kzgvst{flex-direction:row\n    }}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}