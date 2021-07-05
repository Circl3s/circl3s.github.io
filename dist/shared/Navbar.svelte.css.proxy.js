// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Navbar.svelte-4cmdoz{position:fixed;top:0px;z-index:50;display:flex;height:5rem;width:100%;align-items:center;justify-content:space-between;padding:1rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));transition-property:background-color, border-color, color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;transition-timing-function:cubic-bezier(0.4, 0, 0.2, 1);transition-duration:150ms;transition-duration:200ms\n}.bg.svelte-4cmdoz{--tw-bg-opacity:1;background-color:rgba(39, 39, 42, var(--tw-bg-opacity));--tw-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}h2.svelte-4cmdoz{font-size:1.5rem;line-height:2rem\n}a.svelte-4cmdoz{margin:1rem;font-size:1.25rem;line-height:1.75rem\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}