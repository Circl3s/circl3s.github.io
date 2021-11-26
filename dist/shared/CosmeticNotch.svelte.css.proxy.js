// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".CosmeticNotch.svelte-16mtxcc{height:8rem;width:100%;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity))\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}