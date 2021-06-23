module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.{svelte, js, jsx,}",
      "./public/**/*.{html, css}"
    ],
    enabled: "production"
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true
  }
}
