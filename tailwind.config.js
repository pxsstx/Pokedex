/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        bg: "#2E97A7"
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

    },
    plugins: [],
  }
}