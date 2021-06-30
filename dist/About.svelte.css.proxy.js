// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".About.svelte-ne2r3m{display:flex;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:2rem\n}@media(min-width: 768px){.About.svelte-ne2r3m{flex-direction:row\n    }}img.svelte-ne2r3m{margin:1rem;width:33.333333%;border-radius:9999px\n}@media(min-width: 768px){img.svelte-ne2r3m{width:16.666667%\n    }}h2.svelte-ne2r3m,p.svelte-ne2r3m{text-align:center\n}@media(min-width: 768px){h2.svelte-ne2r3m,p.svelte-ne2r3m{text-align:left\n    }}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}