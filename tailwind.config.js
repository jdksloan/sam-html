/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    backgroundImage: {
      jumbotron: "url('./images/nordwood-themes-nDd3dIkkOLo-unsplash.jpg')",
    },
    extend: {
      fontFamily: {
        sans: ['"Roboto-light"', 'sans-serif'],
        roboto: ['"Roboto"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}