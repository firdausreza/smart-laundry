module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        darkblack: '#1A1A1A',
        darkgray: '#2D2D2F',
        lightblue: '#3F8CFF',
        lightgray: '#808191'
      },
      width: {
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px'
      },
      height: {
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px'
      },
      margin: {
        200: '200px',
        300: '300px',
        400: '400px',
        500: '500px'
      },
      screens: {
        sm: { max: '767px' }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: []
}
