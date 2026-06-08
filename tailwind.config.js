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
        primary: '#6B3FA0',     // Purple
        secondary: '#E83E8C',   // Pink
        primaryLight: '#F3E8FF', // Light Purple
        secondaryLight: '#FFF0F5', // Soft Pink
        primaryDark: '#4A2B6E',  // Dark Purple
      },
    },
  },
  plugins: [],
}