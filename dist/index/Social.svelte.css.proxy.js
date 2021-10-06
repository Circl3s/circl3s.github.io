// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Social.svelte-1iwwpf4{background-color:#121214;width:100%;text-align:center;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}h1.svelte-1iwwpf4{padding:1rem;font-size:1.875rem;line-height:2.25rem}.container.svelte-1iwwpf4{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;justify-content:space-around;padding:1rem;max-width:none !important}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}