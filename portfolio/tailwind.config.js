/** @type {import('tailwindcss').Config} */
export default {
  content:  ['./index.html', "./src/**/*.{jsx,js}"],
  darkmode: 'class',
  theme: {
    extend: {
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

