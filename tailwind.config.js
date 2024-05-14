/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
      colors: {
        "leif-red": "#f72622",
        "leif-green": "#03321E",
        "leif-white": "#fcf9f9",
      },
    },
  },
  plugins: [],
};
