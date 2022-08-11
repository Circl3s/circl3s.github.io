// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h1.svelte-p1xt1o.svelte-p1xt1o{font-size:1.875rem;line-height:2.25rem;font-weight:600\n}h3.svelte-p1xt1o.svelte-p1xt1o{font-size:1.875rem;line-height:2.25rem;font-weight:600;--tw-text-opacity:1;color:rgba(212, 212, 216, var(--tw-text-opacity))\n}.mobile-first.svelte-p1xt1o.svelte-p1xt1o{display:none\n}.mobile-first.svelte-p1xt1o.svelte-p1xt1o:first-child{display:flex\n}@media(min-width: 768px){.mobile-first.svelte-p1xt1o.svelte-p1xt1o{display:flex\n    }}.News.svelte-p1xt1o.svelte-p1xt1o{display:flex;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:1rem\n}.items.svelte-p1xt1o.svelte-p1xt1o{display:flex;min-height:16rem;width:100%;flex-direction:column;align-items:center;justify-content:center\n}@media(min-width: 768px){.items.svelte-p1xt1o.svelte-p1xt1o{flex-direction:row\n    }}.thumb.svelte-p1xt1o.svelte-p1xt1o{margin-top:1rem;margin-bottom:1rem;height:10rem;width:100%;border-radius:0.375rem;object-fit:cover\n}.content.svelte-p1xt1o.svelte-p1xt1o{margin:0px;width:100%\n}.content.svelte-p1xt1o>p.svelte-p1xt1o{text-align:justify\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}