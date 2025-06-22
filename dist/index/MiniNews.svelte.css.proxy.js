// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "h1.svelte-1aaiq3e.svelte-1aaiq3e{font-size:1.875rem;line-height:2.25rem;font-weight:600\n}h3.svelte-1aaiq3e.svelte-1aaiq3e{font-size:1.875rem;line-height:2.25rem;font-weight:600;--tw-text-opacity:1;color:rgba(212, 212, 216, var(--tw-text-opacity))\n}.mobile-first.svelte-1aaiq3e.svelte-1aaiq3e{display:none\n}.mobile-first.svelte-1aaiq3e.svelte-1aaiq3e:first-child{display:flex\n}@media(min-width: 768px){.mobile-first.svelte-1aaiq3e.svelte-1aaiq3e{display:flex\n    }}.MiniNews.svelte-1aaiq3e.svelte-1aaiq3e{display:flex;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:1rem\n}.items.svelte-1aaiq3e.svelte-1aaiq3e{display:flex;min-height:16rem;width:100%;flex-direction:column;align-items:center;justify-content:center\n}@media(min-width: 768px){.items.svelte-1aaiq3e.svelte-1aaiq3e{flex-direction:row\n    }}.thumb.svelte-1aaiq3e.svelte-1aaiq3e{margin-top:1rem;margin-bottom:1rem;height:11rem;width:100%;border-radius:0.375rem;object-fit:cover\n}.content.svelte-1aaiq3e.svelte-1aaiq3e{margin:0px;width:100%\n}.content.svelte-1aaiq3e>p.svelte-1aaiq3e{text-align:justify\n}.more.svelte-1aaiq3e.svelte-1aaiq3e{margin:2.5rem;font-size:1.875rem;line-height:2.25rem;font-style:italic;--tw-text-opacity:1;color:rgba(113, 113, 122, var(--tw-text-opacity))\n}.more.svelte-1aaiq3e.svelte-1aaiq3e:hover{text-decoration:underline\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}