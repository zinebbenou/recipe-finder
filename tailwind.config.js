/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", 
  ],
  theme: {
    extend: {
      colors: {
        primary: '#EAB8A1',   // Light coral
        secondary: '#F0D8C4', // Pale peach
        accent: '#B8B39B',    // Olive green
        dark: '#4A5542'       // Dark olive gray
      },
    },
  },
  plugins: [],
};
