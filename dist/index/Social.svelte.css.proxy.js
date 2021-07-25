// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Social.svelte-u5dr27{background-color:#121214;width:100%;text-align:center;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))}h1.svelte-u5dr27{padding:1rem;font-size:1.875rem;line-height:2.25rem}img.svelte-u5dr27{margin:1rem;height:6rem;width:6rem;--tw-brightness:brightness(.75);filter:var(--tw-filter);--tw-grayscale:grayscale(100%);filter:var(--tw-filter);filter:var(--tw-filter);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms}img.svelte-u5dr27:hover{cursor:pointer;filter:none}.container.svelte-u5dr27{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;justify-content:space-around;padding:1rem;max-width:none !important}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}