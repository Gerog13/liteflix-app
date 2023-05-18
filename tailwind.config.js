/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
      ...defaultTheme.screens,
    },
    extend: {
      fontFamily: {
        "bebas-neue": ["Bebas Neue", "sans-serif"],
      },
      colors: {
        "liteflix-grey": "#242424",
        "liteflix-green": "#64EEBC",
      },
    },
  },
  plugins: [],
};
