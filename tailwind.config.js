// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/sections/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['Fira Code', 'monospace'],
        heading: ['Roboto', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#4F46E5',
          dark: '#818CF8', // Lighter indigo for dark mode
        },
        secondary: {
          DEFAULT: '#6B7280',
          dark: '#9CA3AF', // Lighter gray for dark mode
        },
        background: {
          DEFAULT: '#F9FAFB',
          dark: '#111827', // Dark background
        },
        foreground: {
          DEFAULT: '#111827',
          dark: '#F9FAFB', // Light text
        },
        border: {
          DEFAULT: '#E5E7EB',
          dark: '#374151', // Darker border
        },
        accent: {
          DEFAULT: '#10B981',
          dark: '#34D399', // Lighter green
        },
      },
      screens: {
        '2xl': '1440px',
      },
      spacing: {
        128: '32rem',
        144: '36rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('tailwindcss-animate'),
  ],
};
