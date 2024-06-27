/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors:{
      'bg-nav':'rgb(220, 221, 225)',
      'nav-link':'rgb(39, 60, 117)',
      'bg-body':'rgb(245, 246, 250)',
      'color':'rgb(245, 246, 250)',
      'border-color':'rgb(194, 54, 22)'
    },
    extend: {},
  },
  plugins: [],
}