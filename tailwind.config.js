/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'codedale-blue': '#0067F4',
        'codedale-navy': '#001A49',
        'codedale-white': '#FFFFFF',
        'codedale-black': '#000000',
      },
      fontFamily: {
        satoshi: ['Satoshi', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      animation: {
        'slow-ping': 'slow-ping 2s cubic-bezier(0, 0, 0.2, 1) infinite',
      },
      keyframes: {
        'slow-ping': {
          '0%': {
            transform: 'scale(1)',
            opacity: '1',
          },
          '75%, 100%': {
            transform: 'scale(3.5)',
            opacity: '0',
          },
        },
      },
    },
  },
  plugins: [],
}
