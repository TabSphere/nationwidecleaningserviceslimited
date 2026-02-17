/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: '#0F1B3D',
        green: '#2FA44F',
        yellow: '#D6C43A',
      },
      fontFamily: {
        display: ['Playfair Display', 'serif'],
        sans: ['Outfit', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
