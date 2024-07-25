/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        "card-bg" : "#f2f4f6",
        "h1-text": "#010101",
        "primary":"#8c8c8c",
        "but-color":"#d1d5db",
        "qus-bg":"#f3f0ef",
        "fot-bg":"#0d681f",
        
      
      },

      backgroundImage: {
        'bg-image': "url( '../assets/image/newsletter.webp')",
      },
    },
  },
  plugins: [],
}