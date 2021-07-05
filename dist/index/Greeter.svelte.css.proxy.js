// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Greeter.svelte-vcpa8w{display:flex;height:100vh;width:100%;flex-direction:column;align-items:center;justify-content:center;--tw-bg-opacity:1;background-color:rgba(0, 0, 0, var(--tw-bg-opacity))\n}.row.svelte-vcpa8w{display:flex;height:75%;flex-direction:column;padding:2rem\n}@media(min-width: 768px){.row.svelte-vcpa8w{height:33.333333%\n    }.row.svelte-vcpa8w{flex-direction:row\n    }}svg.svelte-vcpa8w{margin:2rem;height:auto;width:75%\n}@media(min-width: 768px){svg.svelte-vcpa8w{height:75%\n    }svg.svelte-vcpa8w{width:auto\n    }}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}