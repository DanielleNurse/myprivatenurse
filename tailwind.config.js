/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FAF8F3',
        'cream-dark': '#F0EBE0',
        'cream-deeper': '#E8E0D0',
        navy: '#1B2B4B',
        'navy-light': '#253D6B',
        'navy-dark': '#0F1B30',
        gold: '#C9A84C',
        'gold-light': '#DFC27A',
        'gold-dark': '#A8872A',
        'gold-pale': '#F5EDD5',
      },
      fontFamily: {
        playfair: ['var(--font-playfair)', 'Georgia', 'serif'],
        inter: ['var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.2em',
      },
    },
  },
  plugins: [],
}
