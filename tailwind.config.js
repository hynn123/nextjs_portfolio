module.exports = {
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
    animation: ['hover', 'focus', 'responsive', 'motion-safe', 'motion-reduce'],
  },
  plugins: [],
}
