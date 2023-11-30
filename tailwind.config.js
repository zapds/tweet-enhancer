/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        'back': '#111111',
        'accent': '#0A0A0A'
      }
    },
  },
  plugins: [],
}

