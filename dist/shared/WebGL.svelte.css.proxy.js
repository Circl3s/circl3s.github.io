// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".WebGL.svelte-6tls7n{top:0px;height:100%;width:100%;background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#4c1d95;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 29, 149, 0));--tw-gradient-to:#1e3a8a\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}