import defaultTheme from 'tailwindcss/defaultTheme';
/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Mohave variable', 'Mohave', ...defaultTheme.fontFamily.sans],
        sans: [
          'Quicksand variable',
          'Quicksand',
          ...defaultTheme.fontFamily.sans,
        ],
      },
      colors: {
        // body: ,
        primary: '#1E1D20',
        // secondary: '#1E1D20',
        accent: '#38bdf8',
        background: '#F6F6F6',
        border: '#000000',
        'footer-text': '#FFFFFF',
        'footer-border': '#FFFFFF',
        'footer-background': '#1E1D20',
      },
      clipPath: {
        custom: 'polygon(0 35%, 100% 0, 100% 100%, 0 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
      },
      variants: {
        extend: {
          opacity: ['motion-safe'],
          animation: ['motion-safe'],
        },
        animation: ['responsive', 'motion-safe', 'motion-reduce'],
      },
    },
  },
  plugins: [
    require('tailwind-clip-path'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
