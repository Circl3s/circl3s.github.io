const colors = require("tailwindcss/colors");

module.exports = {
  mode: "jit",
  purge: {
    content: [
      "./src/**/*.{svelte, js, jsx,}",
      "./public/**/*.{html, css}"
    ],
    safelist: [
      "bg-purple-800",
      "bg-red-800",
      "bg-green-800",
      "bg-yellow-800",
      "bg-blue-800",
      "bg-indigo-800",
      "bg-gray-800",
      "bg-purple-200",
      "bg-red-200",
      "bg-green-200",
      "bg-yellow-200",
      "bg-blue-200",
      "bg-indigo-200",
      "bg-gray-200",
      "from-purple-700",
      "to-purple-500",
      "from-red-700",
      "to-red-500",
      "from-green-700",
      "to-green-500",
      "from-yellow-700",
      "to-yellow-500",
      "from-blue-700",
      "to-blue-500",
      "from-indigo-700",
      "to-indigo-500",
      "max-w-xs",
      "max-w-sm",
      "max-w-md",
      "max-w-lg",
      "max-w-xl",
      "max-w-2xl",
      "max-w-3xl"
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
