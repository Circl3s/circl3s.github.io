// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "img.svelte-1rg05wk{margin:1rem;height:6rem;width:6rem;--tw-brightness:brightness(.75);filter:var(--tw-filter);--tw-grayscale:grayscale(100%);filter:var(--tw-filter);filter:var(--tw-filter);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms\n}img.svelte-1rg05wk:hover{cursor:pointer;filter:none\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}