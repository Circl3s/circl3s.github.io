// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Sequencer.svelte-7p2j98{margin-top:1rem;margin-bottom:1rem;display:grid;height:13rem;width:100%;grid-template-columns:repeat(1, minmax(0, 1fr));grid-template-rows:repeat(4, minmax(0, 1fr));border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(24, 24, 27, var(--tw-bg-opacity));font-family:ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, \"Liberation Mono\", \"Courier New\", monospace;--tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.channel.svelte-7p2j98{display:grid;grid-template-columns:repeat(16, minmax(0, 1fr))\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}