/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'bg-brown': '#4B4A45',
        'light-brown':"#64635E",
      },
    },
  },
  plugins: [],
}

