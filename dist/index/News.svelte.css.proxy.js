// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h1.svelte-1786xje.svelte-1786xje{font-size:1.875rem;line-height:2.25rem;font-weight:600\n}h3.svelte-1786xje.svelte-1786xje{font-size:1.875rem;line-height:2.25rem;font-weight:600;--tw-text-opacity:1;color:rgba(212, 212, 216, var(--tw-text-opacity))\n}.News.svelte-1786xje.svelte-1786xje{display:flex;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:1rem\n}.items.svelte-1786xje.svelte-1786xje{display:flex;min-height:16rem;width:100%;flex-direction:row;align-items:center;justify-content:center;overflow-x:auto\n}.thumb.svelte-1786xje.svelte-1786xje{margin-top:1rem;margin-bottom:1rem;height:10rem;width:100%;border-radius:0.375rem;object-fit:cover\n}.content.svelte-1786xje.svelte-1786xje{margin:0px;width:100%\n}.content.svelte-1786xje>p.svelte-1786xje{text-align:justify\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}