// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".About.svelte-ake7zb{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:2rem}@media(min-width: 768px){.About.svelte-ake7zb{flex-direction:row}}img.svelte-ake7zb{margin:1rem;height:9rem;width:9rem;border-radius:9999px;border-width:8px;border-style:solid;--tw-border-opacity:1;border-color:rgba(244, 244, 245, var(--tw-border-opacity));object-fit:cover}@media(min-width: 768px){img.svelte-ake7zb{height:14rem}img.svelte-ake7zb{width:14rem}}h2.svelte-ake7zb,p.svelte-ake7zb{text-align:center}@media(min-width: 768px){h2.svelte-ake7zb,p.svelte-ake7zb{text-align:left}}p.svelte-ake7zb{text-indent:8px}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}