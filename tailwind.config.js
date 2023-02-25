/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'white': '#FFFFFF',
        'black': '#181818',
        'gray': '#C4C4C4',
        'red':'#F0141E'
      },
    },
  },
  plugins: [],
}
