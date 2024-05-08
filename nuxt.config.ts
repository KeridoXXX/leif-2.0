// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ["~/assets/css/tailwind.css", "~/assets/css/global.css"],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
  googleFonts: {
    families: {
      Alata: true,
      "Homemade Apple": true,
      "Josefin Sans": [100, 700],
      "Kiwi Maru": true,
      Montserrat: [100, 900],
      Sanchez: true,
    },
    display: "swap",
  },
});
