const defaultTheme = require ('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Quicksand',...defaultTheme.fontFamily.sans]
    },
    extend: {
      gridTemplateColumns: {
        "1/5": "1fr 5fr"
      },
      backgroundImage: {
        'nsky' : "url('../img/snowy.svg')",
      },
      colors: {
        'snowblue' : '#d5eaf1',
      },
    },
  },
  plugins: [],
}