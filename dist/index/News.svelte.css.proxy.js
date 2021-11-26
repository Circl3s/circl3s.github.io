// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h2.svelte-yal6xt{font-size:1.5rem;line-height:2rem;font-weight:600\n}h3.svelte-yal6xt{font-size:1.875rem;line-height:2.25rem;font-weight:600;--tw-text-opacity:1;color:rgba(212, 212, 216, var(--tw-text-opacity))\n}.News.svelte-yal6xt{display:flex;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:1rem\n}.items.svelte-yal6xt{display:flex;height:16rem;flex-direction:row;align-items:center;justify-content:center\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}