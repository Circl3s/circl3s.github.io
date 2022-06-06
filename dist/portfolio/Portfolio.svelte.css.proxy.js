// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Portfolio.svelte-1op8zd8{display:flex;flex-direction:column;padding:2rem\n}.bg.svelte-1op8zd8{position:fixed;bottom:0px;height:100%;width:100%;background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#4c1d95;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 29, 149, 0));--tw-gradient-to:#1e3a8a;z-index:-1\n}.Portfolio.svelte-1op8zd8>.Card{align-self:center\n}@media(min-width: 768px){.Portfolio.svelte-1op8zd8>.Card{align-self:flex-start\n        }.Portfolio.svelte-1op8zd8>.Card:nth-child(even){align-self:flex-end\n        }}.Portfolio.svelte-1op8zd8 a{text-decoration:underline\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}