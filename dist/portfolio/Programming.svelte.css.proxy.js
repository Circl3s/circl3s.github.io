// [snowpack] add styles to the page (skip if no document exists)
if (typeof document !== 'undefined') {
  const code = ".Programming.svelte-uu0hjm{background-image:linear-gradient(to top right, var(--tw-gradient-stops));--tw-gradient-from:#4c1d95;--tw-gradient-stops:var(--tw-gradient-from), var(--tw-gradient-to, rgba(76, 29, 149, 0));--tw-gradient-to:#1e3a8a\n}.content.svelte-uu0hjm{display:flex;flex-direction:column-reverse;align-items:center;justify-content:center\n}@media(min-width: 768px){.content.svelte-uu0hjm{flex-direction:row\n        }}.col.svelte-uu0hjm{margin:2rem;display:flex;flex-direction:column;align-items:center\n}@media(min-width: 768px){.col.svelte-uu0hjm{width:20rem\n        }}.logo.svelte-uu0hjm{margin:0px;object-fit:contain;padding:0px;image-rendering:crisp-edges\n}.logotype.svelte-uu0hjm{margin:0px;display:flex;height:100%;width:100%;flex-direction:row;justify-content:center;padding:0px;font-weight:600\n}.techstack.svelte-uu0hjm{display:flex;flex-direction:row;flex-wrap:wrap;justify-content:center\n}.status.svelte-uu0hjm{margin-top:0.5rem;margin-bottom:0.5rem;width:min-content;white-space:nowrap;border-radius:0.375rem;--tw-bg-opacity:1;background-color:rgba(228, 228, 231, var(--tw-bg-opacity));padding:0.5rem;--tw-shadow:inset 0 2px 4px 0 rgba(0, 0, 0, 0.06);box-shadow:var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow)\n}.actions.svelte-uu0hjm{display:flex;flex-direction:row\n}h1.svelte-uu0hjm{margin-top:6rem;font-size:1.5rem;line-height:2rem\n}";

  const styleEl = document.createElement("style");
  const codeEl = document.createTextNode(code);
  styleEl.type = 'text/css';
  styleEl.appendChild(codeEl);
  document.head.appendChild(styleEl);
}