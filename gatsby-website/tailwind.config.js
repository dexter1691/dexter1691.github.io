const defaultTheme = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './node_modules/@mariusmarais/tailwindcss-heroicons/src/**/*.js',
    './src/pages/**/*.{js,jsx,ts,tsx}',
    './src/components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        /* Recommended font by Tailwind docs */
        sans: ['Inter', ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'bluee': {
          DEFAULT: '#2c3e50',
        }
      },
    },
  },
  plugins: [],
}