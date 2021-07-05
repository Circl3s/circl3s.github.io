// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Notch.svelte-ue1qbk{position:absolute;bottom:0px;height:8rem;width:100%;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));clip-path:polygon(0 0, 0 100%, 100% 100%)\n}svg.svelte-ue1qbk{margin-top:auto;margin-bottom:auto;margin-left:1rem;margin-right:1rem;height:100%;width:3rem;--tw-text-opacity:1;color:rgba(39, 39, 42, var(--tw-text-opacity))\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}