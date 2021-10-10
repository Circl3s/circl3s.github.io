// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".NotFound.svelte-u2ftkw{display:flex;height:100vh;width:100vw\n}.bg.svelte-u2ftkw{position:fixed;bottom:0px;height:100%;width:100%;background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:#18181b;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(24, 24, 27, 0));--tw-gradient-to:#000;z-index:-1\n}.content.svelte-u2ftkw{display:flex;height:100%;width:100%;align-items:center;justify-content:center\n}iframe.svelte-u2ftkw{margin-top:1rem;height:20rem;width:100%\n}@media(min-width: 768px){iframe.svelte-u2ftkw{height:24rem\n        }}a.svelte-u2ftkw{text-decoration:underline\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}