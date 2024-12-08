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
        primary: '#001F3F',
        secondary: '#4b5563',
        accent: '#43b7ff',
        background: '#F9FAFB',
        border: '#001F3F',
        'footer-text': '#FFFFFF',
        'footer-border': '#FFFFFF',
        'footer-background': '#001F3F',
      },
      clipPath: {
        custom: 'polygon(0 35%, 100% 0, 100% 100%, 0 100%)',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: 0, transform: 'translateY(20px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        growTriangle: {
          '0%': { opacity: 0, transform: 'translateY(100%)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
      },
      animation: {
        fadeInUp: 'fadeInUp 0.5s ease-out forwards',
        growTriangle: 'growTriangle 0.3s ease-out forwards',
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
