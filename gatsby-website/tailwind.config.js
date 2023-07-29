const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@mariusmarais/tailwindcss-heroicons/src/**/*.js',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
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