// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Hobbies.svelte-w8pws7{background-color:transparent\n}.bg.svelte-w8pws7{position:fixed;bottom:0px;height:100%;width:100%;background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#4c1d95;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 29, 149, 0));--tw-gradient-to:#1e3a8a;z-index:-1\n}.columns.svelte-w8pws7{display:flex;height:100%;flex-direction:column;padding:1rem\n}@media(min-width: 768px){.columns.svelte-w8pws7{flex-direction:row\n        }}.hobby.svelte-w8pws7{display:flex;width:100%;justify-content:center\n}@media(min-width: 768px){.hobby.svelte-w8pws7{width:50%\n        }}p.svelte-w8pws7{text-align:justify\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}