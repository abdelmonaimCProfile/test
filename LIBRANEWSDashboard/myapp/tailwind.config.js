
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./SignInComponent/**/*.{js,ts,jsx,tsx}",
    "./AuthorComponent/**/*.{js,ts,jsx,tsx}",
    "./Components/**/*.{js,ts,jsx,tsx}",
    "./PostComponent/**/*.{js,ts,jsx,tsx}",
    "./CategorieComponent/**/*.{js,ts,jsx,tsx}",
    "./ComponentsDate/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {

    extend: {
      colors:{
        'web-orange': {
          '50': '#fffcea',
          '100': '#fff5c5',
          '200': '#ffeb85',
          '300': '#ffda46',
          '400': '#ffc71b',
          'lg': '#ffa500',
          '600': '#e27c00',
          '700': '#bb5502',
          '800': '#984208',
          '900': '#7c360b',
      },
    },
    }
  },
  plugins: [],
}
