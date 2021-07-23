const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.{svelte, js, jsx,}",
      "./public/**/*.{html, css}"
    ],
    safelist: [
      "from-purple-900",
      "to-purple-700",
      "from-red-900",
      "to-red-700",
      "from-green-900",
      "to-green-700",
      "from-yellow-900",
      "to-yellow-700",
      "from-blue-900",
      "to-blue-700",
      "from-indigo-900",
      "to-indigo-700",
    ],
    enabled: "production",
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        red: colors.rose
      }
    },
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
