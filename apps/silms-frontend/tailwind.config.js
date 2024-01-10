/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../../node_modules/flowbite-react/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },

      colors: {
        custom: {
          primary: {
            1: "#063760",
            2: "#597995",
            3: "#ACBCCA",
          },
          secondary: {
            1: "#B5D2CB",
            2: "#CDE1DC",
            3: "#E6F0ED",
          },
          accent: {
            1: "#40E0BA",
            2: "#7FEAD1",
            3: "#BFF4E8",
          },
        },
      },
    },
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [require("flowbite/plugin")],
};
