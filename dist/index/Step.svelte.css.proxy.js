// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Step.svelte-186yjq1{margin:0.125rem;transition-duration:100ms}@media(min-width: 768px){.Step.svelte-186yjq1{margin:0.25rem}}@keyframes svelte-186yjq1-blink{0%{filter:brightness(2)}100%{filter:none}}.blink.svelte-186yjq1{animation-name:svelte-186yjq1-blink;animation-duration:0.5s;animation-iteration-count:1;animation-timing-function:cubic-bezier(0.075, 0.82, 0.165, 1)}.no-blink.svelte-186yjq1{animation:none !important}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}