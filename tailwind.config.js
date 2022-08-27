/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'nav': '#323232',
        'body': '#202020',
        'buttons': '#9D9D9D',
        'texts': '#cacaca',
        'pars': '#6D6D6D',
    
      },
      fontFamily: {
        'body':["Manrope"],
      }
    },
  },
  plugins: [],
}
