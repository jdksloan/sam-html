/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html"],
  theme: {
    backgroundImage: {
      jumbotron: "url('./images/leone-venter-VieM9BdZKFo-unsplash.jpg')",
    },
    extend: {
      fontFamily: {
        sans: ['"Palatino-light"', 'sans-serif'],
        palatino: ['"Palatino"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}