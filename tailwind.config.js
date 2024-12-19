/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],  
  theme: {
    extend: {
      colors:{
        "custom-lightYellow": "#FFF7E2",
        "custom-green": "#3A643B",
        "custom-black": "#474747",
        "custom-red": "#951D1C"
      },
      fontFamily:{
        din: ['DINPro', 'sans-serif']
      },
    },
  },
  plugins: [],
}