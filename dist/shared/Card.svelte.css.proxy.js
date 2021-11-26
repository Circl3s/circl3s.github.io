// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Card.svelte-13esh46{z-index:10;margin:1rem;width:100%;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(244, 244, 245, var(--tw-bg-opacity));padding:1rem;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}@media(min-width: 768px){.Card.svelte-13esh46{max-width:36rem\n    }}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}