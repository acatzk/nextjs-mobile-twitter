const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    '~/pages/**/*.{js,ts,jsx,tsx}', 
    '~/components/**/*.{js,ts,jsx,tsx}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'twitter-blue': '#1da1f2'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
