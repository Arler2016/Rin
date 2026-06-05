/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "../packages/ui/src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: ['selector','[data-color-mode="dark"]'],
  theme: {
    extend: {
      colors: {
        'theme': 'rgb(var(--theme-rgb) / <alpha-value>)',
        'theme-hover': 'rgb(var(--theme-hover-rgb) / <alpha-value>)',
        'theme-active': 'rgb(var(--theme-active-rgb) / <alpha-value>)',
        'background': {
          'light': '#f0f2f5',
          'dark': '#0f0f1a',
        },
        'dark': "rgba(26, 26, 46, 0.6)"
      },
      transitionProperty: {
        'height': 'height',
        'width': 'width',
        'spacing': 'margin, padding',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
