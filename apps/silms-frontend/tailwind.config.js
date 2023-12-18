/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "node_modules/flowbite-react/lib/esm/**/*.js"
  ],
  theme: {
    extend: {},
    screens: {
      ...defaultTheme.screens,
    },
  },
  plugins: [
    require('flowbite/plugin')
    ]
 }