// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".About.svelte-1i135b3{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:2rem}@media(min-width: 768px){.About.svelte-1i135b3{flex-direction:row}}img.svelte-1i135b3{margin:1rem;height:9rem;width:9rem;border-radius:9999px;object-fit:cover}@media(min-width: 768px){img.svelte-1i135b3{height:14rem}img.svelte-1i135b3{width:14rem}}h2.svelte-1i135b3,p.svelte-1i135b3{text-align:center}@media(min-width: 768px){h2.svelte-1i135b3,p.svelte-1i135b3{text-align:left}}p.svelte-1i135b3{text-indent:8px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}