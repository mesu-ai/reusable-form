/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
				primary: '#1CC5DC',
				darkblue: '#23262F',
				secondary: '#23262F',
				mercury: '#E6E8EC',
			},
      
    },
  },
  plugins: [],
}
