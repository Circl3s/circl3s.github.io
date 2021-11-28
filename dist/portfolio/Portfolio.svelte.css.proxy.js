// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Portfolio.svelte-uqnng2{display:flex;flex-direction:column;padding:2rem\n}.Portfolio.svelte-uqnng2>.Card{align-self:center\n}@media(min-width: 768px){.Portfolio.svelte-uqnng2>.Card{align-self:flex-start\n    }.Portfolio.svelte-uqnng2>.Card:nth-child(even){align-self:flex-end\n    }}.Portfolio.svelte-uqnng2 a{text-decoration:underline\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}