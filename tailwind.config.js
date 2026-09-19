/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        apple: {
          dark: '#161617',
          black: '#000000',
          white: '#f5f5f7',
          gray: '#86868b',
          blue: '#2997ff',
          link: '#0071e3',
          border: 'rgba(255, 255, 255, 0.08)',
          card: '#1d1d1f'
        }
      },
      fontFamily: {
        sans: [
          '-apple-system',
          'BlinkMacSystemFont',
          '"SF Pro Text"',
          '"SF Pro Icons"',
          '"Helvetica Neue"',
          'Helvetica',
          'Arial',
          'sans-serif'
        ]
      }
    },
  },
  plugins: [],
}
