/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        myBlue: {
          bgLight: "#eef3fe",
          bgDark: "#dee8fd",
          300: "#bdd1fb",
          400: "#b5cbfb",
          main: "#adc6fb",
          600: "#9bb2e1",
          700: "#8a9ec8",
          800: "#798aaf",
          900: "#677696",
        },
      },
      screens: {
        "2xl": "1700px",
        "3xl": "2100px",
        "4xl": "2550px",
        "5xl": "3100px",
        "6xl": "3700px",
        // => @media (min-width: 992px) { ... }
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};
