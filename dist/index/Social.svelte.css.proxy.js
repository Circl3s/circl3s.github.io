// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Social.svelte-ez9vtu{background-color:#121214;width:100%;text-align:center;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}h1.svelte-ez9vtu{padding:1rem;font-size:1.875rem;line-height:2.25rem}.container.svelte-ez9vtu{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;padding:1rem;max-width:none !important}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}