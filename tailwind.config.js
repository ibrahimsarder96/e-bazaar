/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: [
      {
        bazaartheme: {
        
"primary": "#FF8B42",
        
"secondary": "#6E27E0",
        
"accent": "#273240",
        },
      },
    ],
  },
  plugins: [require("daisyui")],
}

