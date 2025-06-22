// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = "@keyframes svelte-34wyn4-wiggle{0%{right:0px}80%{right:0px}85%{right:5px}90%{right:-5px}95%{right:5px}100%{right:-5px}}.TechInfo.svelte-34wyn4{position:relative;margin:1rem;display:flex;height:min-content;width:100%;min-width:8rem;flex-direction:column;justify-content:center;border-radius:0.375rem;padding:0.5rem;--tw-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);transition-duration:200ms\n}@media(min-width: 640px){.TechInfo.svelte-34wyn4{width:40%\n        }}.header.svelte-34wyn4{display:flex;height:3rem;cursor:pointer;user-select:none;flex-direction:row;justify-content:center;padding:0.5rem\n}.cta.svelte-34wyn4{animation:1.5s linear infinite svelte-34wyn4-wiggle}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}