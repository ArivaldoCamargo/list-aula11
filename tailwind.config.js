/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#410094',
      },
     
        flex: {
          '2': '2 2 0%',
        }
     
    },
   },

  plugins: [],
};

