/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'bg-nav':'rgb(35,32,38)',
      'nav-link':'rgb(39, 60, 117)',
      'bg-body':'rgb(245, 246, 250)',
      'color':'rgb(245, 246, 250)',
      'border-color':'rgb(194, 54, 22)',
      'white':'#f8fafc',
      'body-footer':'rgb(50,50,50)'
    },
    extend: {},
  },
  plugins: [],
}