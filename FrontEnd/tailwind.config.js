/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'text': 'black',
        'grey': '#393939',
        'transparent': '#ffffff00',
        'white': '#ffffff',
        'boder-grey': '#E4E4E4',
        'input-light-grey': '#F8F8F8',
        'errors': 'red',
        'light-pink': '#DE30B7',
        'dark-pink': '#6A1056',
        'light-text': '#696969',
      },
      fontSize: {
        '5xl': '9rem',
      },
      fontFamily: {
        'text': ['Inter', 'ui-sans-serif'],
      },
      backgroundImage: {
        signIllustration: "url('../../assets/images/bg.png')",
      },
    },
  },
  plugins: [],
}