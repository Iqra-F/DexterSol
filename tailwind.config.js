/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}', // if you're using app directory
    './pages/**/*.{js,ts,jsx,tsx}', // if using pages directory
    './components/**/*.{js,ts,jsx,tsx}', // for components
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ['Poppins'],
      },
    },
  },
  plugins: [],
}
