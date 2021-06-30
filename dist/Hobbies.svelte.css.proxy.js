// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Hobbies.svelte-1gsrcy8{background-color:transparent\n}.bg.svelte-1gsrcy8{position:fixed;bottom:0px;height:100%;width:100%;z-index:-1\n}.columns.svelte-1gsrcy8{display:flex;height:100%;flex-direction:column;padding:1rem\n}@media(min-width: 768px){.columns.svelte-1gsrcy8{flex-direction:row\n        }}.hobby.svelte-1gsrcy8{display:flex;width:100%;justify-content:center\n}@media(min-width: 768px){.hobby.svelte-1gsrcy8{width:50%\n        }}p.svelte-1gsrcy8{text-align:justify\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}