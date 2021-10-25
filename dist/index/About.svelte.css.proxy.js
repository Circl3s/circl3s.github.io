// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".About.svelte-xiyejb{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:2rem}@media(min-width: 768px){.About.svelte-xiyejb{flex-direction:row}}img.svelte-xiyejb{margin:1rem;height:9rem;width:9rem;border-radius:9999px;border-width:4px;border-style:solid;--tw-border-opacity:1;border-color:rgba(39, 39, 42, var(--tw-border-opacity));object-fit:cover}@media(min-width: 768px){img.svelte-xiyejb{height:14rem}img.svelte-xiyejb{width:14rem}}h2.svelte-xiyejb,p.svelte-xiyejb{text-align:center}@media(min-width: 768px){h2.svelte-xiyejb,p.svelte-xiyejb{text-align:left}}p.svelte-xiyejb{text-indent:8px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}