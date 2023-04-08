const defaultTheme = require('tailwindcss/defaultTheme');
module.exports = {
  mode: 'all',
  content: [
    "./projects/hero-icons-showcase/src/**/*.{html,ts}",
    "./projects/hero-icons-showcase/src/index.html"
  ],
  safelist: [
    {
      pattern: /^text-/,
      variants: ['hover'],
    }
  ],
  important: true,
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      }
    },
  },
  plugins: []
}
