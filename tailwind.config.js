/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.html'],
  theme: {
    extend: {
      colors: {
        brand: {
          blue: '#5f8cc0',
          'blue-dark': '#4a7ab0',
          'blue-deep': '#3a6a9e',
          orange: '#e8850c',
          'orange-dark': '#d0770a',
          cream: '#fdf8f3',
        }
      },
      fontFamily: {
        heading: ['"Playfair Display"', 'Georgia', 'serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
      }
    }
  },
  plugins: [],
}
