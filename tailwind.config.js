module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'hero-lg': "url('/src/assets/landing.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
