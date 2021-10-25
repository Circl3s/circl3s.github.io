// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".About.svelte-1fclbrf{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:2rem}@media(min-width: 768px){.About.svelte-1fclbrf{flex-direction:row}}img.svelte-1fclbrf{margin:1rem;height:9rem;width:9rem;border-radius:9999px;border-width:8px;border-style:solid;--tw-border-opacity:1;border-color:rgba(39, 39, 42, var(--tw-border-opacity));object-fit:cover}@media(min-width: 768px){img.svelte-1fclbrf{height:14rem}img.svelte-1fclbrf{width:14rem}}h2.svelte-1fclbrf,p.svelte-1fclbrf{text-align:center}@media(min-width: 768px){h2.svelte-1fclbrf,p.svelte-1fclbrf{text-align:left}}p.svelte-1fclbrf{text-indent:8px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}