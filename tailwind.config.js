const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Lato', ...defaultTheme.fontFamily.sans],
        configOb: ['ConfigOb'],
        config: ['ConfigRegular'],
        bigNoodle: ['BigNoodleTilting'],
        bigNoodleOb: ['BigNoodleTiltingItalic'],
      },
      screens: {
        'xxl': '1410px',
        'sm': {'max': '1300px'}
      },
      colors: {
        orange: '#FF8A00',
        darkBlue: '#191932',
        clearBlue: '#05A0FA'
      },
      backgroundImage: {
        'Accueil': "url('/src/static/png/Bof5rAn.png')",
      },
      height: {
        'almstScreen': "90vh",
        'doubleAlmstScreen': '180vh'
      }
    },
  },
  variants: {
    borderWidth: ['responsive', 'hover'],
  },
  plugins: [require('@tailwindcss/forms', {
    strategy: 'base', // only generate global styles
    // strategy: 'class', // only generate classes
  })],
};
