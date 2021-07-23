// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Button.svelte-o9ybj0{margin:1rem;border-radius:0.375rem;background-image:linear-gradient(to bottom right, var(--tw-gradient-stops));padding:1rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-shadow:0 1px 2px 0 rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms\n}.Button.svelte-o9ybj0:hover{--tw-brightness:brightness(1.25);filter:var(--tw-filter)\n}.Button.svelte-o9ybj0:disabled{cursor:default;--tw-grayscale:grayscale(100%);filter:var(--tw-filter);filter:var(--tw-filter)\n}.Button.svelte-o9ybj0:disabled:hover{--tw-brightness:brightness(1);filter:var(--tw-filter)\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}