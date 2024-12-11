/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#18568C',
          light: '#2167A3',
          dark: '#144571',
        },
        secondary: {
          DEFAULT: '#038C3E',
          light: '#04A349',
          dark: '#027533',
        },
        accent: {
          DEFAULT: '#038C4C',
          light: '#04A35B',
          dark: '#02753F',
        },
      },
    },
  },
  plugins: [],
}