// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Social.svelte-zt6s3q{width:100%;--tw-bg-opacity:1;background-color:rgba(244, 244, 245, var(--tw-bg-opacity));text-align:center;--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity))\n}h1.svelte-zt6s3q{padding:1rem;font-size:1.875rem;line-height:2.25rem\n}.container.svelte-zt6s3q{display:flex;width:100%;flex-direction:row;flex-wrap:wrap;justify-content:space-evenly;padding:1rem;max-width:none !important\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}