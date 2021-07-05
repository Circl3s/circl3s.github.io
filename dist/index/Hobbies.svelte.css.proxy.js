// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Hobbies.svelte-18x7nsg{background-color:transparent\n}.bg.svelte-18x7nsg{position:fixed;bottom:0px;height:100%;width:100%;background-image:linear-gradient(to bottom, var(--tw-gradient-stops));--tw-gradient-from:#18181b;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(24, 24, 27, 0));--tw-gradient-to:#000;z-index:-1\n}.columns.svelte-18x7nsg{display:flex;height:100%;flex-direction:column;padding:1rem\n}@media(min-width: 768px){.columns.svelte-18x7nsg{flex-direction:row\n        }}.hobby.svelte-18x7nsg{display:flex;width:100%;justify-content:center\n}@media(min-width: 768px){.hobby.svelte-18x7nsg{width:50%\n        }}p.svelte-18x7nsg{text-align:justify\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}