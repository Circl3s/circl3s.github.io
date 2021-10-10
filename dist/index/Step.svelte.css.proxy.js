// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Step.svelte-zw2sxj{margin:0.125rem;border-radius:0.125rem;transition-duration:100ms}@media(min-width: 768px){.Step.svelte-zw2sxj{margin:0.25rem}}@keyframes svelte-zw2sxj-blink{0%{filter:brightness(2)}100%{filter:none}}.blink.svelte-zw2sxj{animation-name:svelte-zw2sxj-blink;animation-duration:0.5s;animation-iteration-count:1;animation-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1)}.no-blink.svelte-zw2sxj{animation:none !important}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}