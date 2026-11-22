/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./index.js"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        ink: "#0B0B0C",
        maroon: {
          DEFAULT: "#7A1424",
          hi: "#A31D33",
          deep: "#4A0A12",
        },
      },
      fontFamily: {
        display: ['"Bricolage Grotesque"', "system-ui", "sans-serif"],
        sans: ['"IBM Plex Sans"', "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
