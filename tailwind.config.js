/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        crimg:"url('https://drive.google.com/file/d/1CHv-VMVFTG4MWD6hA30cn8Od3iaPaW5o/view?usp=share_link')"
      },

      colors:{
        bg: "#2E97A7",
        bgColor:"#32496D",
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif']
      },

    },
    plugins: [],
  }
}