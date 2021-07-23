// Snowpack Configuration File
// See all supported options: https://www.snowpack.dev/reference/configuration

/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: "/",
    src: "/dist",
    well_known: "/.well-known"
  },
  plugins: [
    "@snowpack/plugin-svelte",
    "@snowpack/plugin-postcss",
    'snowpack-plugin-glslify'
  ],
  packageOptions: {
    /* ... */
  },
  devOptions: {
    tailwindConfig: "./tailwind.config.js"
  },
  buildOptions: {
    htmlFragments: true
  },
};
