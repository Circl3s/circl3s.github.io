// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Step.svelte-tqndk3{margin:0.5rem;height:33.333333%;width:3rem;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(39, 39, 42, var(--tw-bg-opacity));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:100ms\n}.Step.svelte-tqndk3:hover{--tw-bg-opacity:1;background-color:rgba(63, 63, 70, var(--tw-bg-opacity))\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}