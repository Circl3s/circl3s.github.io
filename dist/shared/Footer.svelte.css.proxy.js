// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Footer.svelte-wd0nsk{--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:1rem;text-align:center;--tw-text-opacity:1;color:rgba(113, 113, 122, var(--tw-text-opacity))\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}