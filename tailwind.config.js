/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{html,njk,md}"],
  theme: {
    extend: {
      screens: {
        'tn': '400px',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('daisyui'),
    require('@tailwindcss/aspect-ratio'),
  ],
}

