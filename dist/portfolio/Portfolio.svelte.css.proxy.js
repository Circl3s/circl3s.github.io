// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Portfolio.svelte-5nua7k{display:flex;flex-direction:column;padding:2rem\n}.bg.svelte-5nua7k{position:fixed;bottom:0px;height:100%;width:100%;background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#4c1d95;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 29, 149, 0));--tw-gradient-to:#1e3a8a;z-index:-1\n}.Portfolio.svelte-5nua7k .Card{margin-top:1rem;margin-bottom:1rem;margin-left:0px;margin-right:0px\n}@media(min-width: 768px){.Portfolio.svelte-5nua7k .Card{margin-left:1rem;margin-right:1rem\n        }}.Portfolio.svelte-5nua7k a{text-decoration:underline\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}