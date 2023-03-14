const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  content: [
    "./projects/hero-icons-showcase/src/**/*.{html,ts}"
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: [],
}
