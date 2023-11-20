/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        "login-background": 'url("/background.avif")'
      },
      backgroundColor: {
        'rgba-black': 'rgba(0, 0, 0, 0.6)'
        
      },
      height: {
        'large-box': '400px'
      }
    },
  },
  plugins: [],
}
