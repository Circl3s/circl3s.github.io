// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h1.svelte-e43o5l.svelte-e43o5l{font-size:1.875rem;line-height:2.25rem;font-weight:600\n}h3.svelte-e43o5l.svelte-e43o5l{font-size:1.875rem;line-height:2.25rem;font-weight:600;--tw-text-opacity:1;color:rgba(212, 212, 216, var(--tw-text-opacity))\n}.mobile-first.svelte-e43o5l.svelte-e43o5l{display:none\n}.mobile-first.svelte-e43o5l.svelte-e43o5l:first-child{display:flex\n}@media(min-width: 768px){.mobile-first.svelte-e43o5l.svelte-e43o5l{display:flex\n    }}.News.svelte-e43o5l.svelte-e43o5l{display:flex;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:1rem\n}.items.svelte-e43o5l.svelte-e43o5l{display:flex;min-height:16rem;width:100%;flex-direction:column;align-items:center;justify-content:center\n}@media(min-width: 768px){.items.svelte-e43o5l.svelte-e43o5l{flex-direction:row\n    }}.thumb.svelte-e43o5l.svelte-e43o5l{margin-top:1rem;margin-bottom:1rem;height:11rem;width:100%;border-radius:0.375rem;object-fit:cover\n}.content.svelte-e43o5l.svelte-e43o5l{margin:0px;width:100%\n}.content.svelte-e43o5l>p.svelte-e43o5l{text-align:justify\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}