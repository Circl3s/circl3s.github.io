// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".TechInfo.svelte-k2u1hy{margin:1rem;display:flex;height:min-content;width:100%;min-width:8rem;flex-direction:column;justify-content:center;border-radius:0.375rem;padding:0.5rem;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:200ms\n}@media(min-width: 768px){.TechInfo.svelte-k2u1hy{width:40%\n    }}.header.svelte-k2u1hy{display:flex;height:3rem;cursor:pointer;user-select:none;flex-direction:row;padding:0.5rem\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}