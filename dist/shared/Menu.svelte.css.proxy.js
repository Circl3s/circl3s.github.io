// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@import url(\"https://fonts.googleapis.com/icon?family=Material+Icons+Round\");.Menu.svelte-1rjvynr{margin:1rem\n}.content.svelte-1rjvynr{position:absolute;top:100%;right:0px;display:flex;flex-direction:column;--tw-bg-opacity:1;background-color:rgba(244, 244, 245, var(--tw-bg-opacity));--tw-text-opacity:1;color:rgba(0, 0, 0, var(--tw-text-opacity));--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.content.svelte-1rjvynr a{text-align:right\n}.icon.svelte-1rjvynr{display:flex;justify-content:center;vertical-align:middle;font-size:1.25rem;line-height:1.75rem\n}.icon.svelte-1rjvynr:focus{outline:2px solid transparent;outline-offset:2px\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}