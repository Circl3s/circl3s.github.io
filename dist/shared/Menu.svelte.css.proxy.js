// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons+Round\");.Menu.svelte-126dhc5{margin:1rem\n}.content.svelte-126dhc5{position:absolute;top:100%;right:0px;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(39, 39, 42, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(255, 255, 255, var(--tw-text-opacity))\n}.content.svelte-126dhc5 a{text-align:right\n}.icon.svelte-126dhc5{display:flex;justify-content:center;vertical-align:middle;font-size:1.25rem;line-height:1.75rem\n}.icon.svelte-126dhc5:focus{outline:2px solid transparent;outline-offset:2px\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}