// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".About.svelte-rkesvt{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:2rem}@media(min-width: 768px){.About.svelte-rkesvt{flex-direction:row}}img.svelte-rkesvt{margin:1rem;width:33.333333%;border-radius:9999px}@media(min-width: 768px){img.svelte-rkesvt{width:16.666667%}}h2.svelte-rkesvt,p.svelte-rkesvt{text-align:center}@media(min-width: 768px){h2.svelte-rkesvt,p.svelte-rkesvt{text-align:left}}p.svelte-rkesvt{text-indent:8px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}