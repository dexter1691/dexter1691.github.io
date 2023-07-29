const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {
      fontFamily: {
        /* Recommended font by Tailwind docs */
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
    },
  },
  plugins: [],
  }
}