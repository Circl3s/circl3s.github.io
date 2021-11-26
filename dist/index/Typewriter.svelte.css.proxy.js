// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Typewriter.svelte-1wxu1f8{scrollbar-width:none;margin-top:1rem;margin-bottom:1rem;height:8rem;width:100%;overflow:scroll;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));padding:1rem;font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;font-size:0.875rem;line-height:1.25rem;--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity));--tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)}@media(min-width: 768px){.Typewriter.svelte-1wxu1f8{height:13rem}.Typewriter.svelte-1wxu1f8{font-size:1rem;line-height:1.5rem}}.svelte-1wxu1f8::-webkit-scrollbar{display:none}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}