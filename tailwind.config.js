/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',  // Include your React components
  ],
  theme: {
    extend: {
      colors: {
        primary: "#FC7327", 
        secondary: "#2F3344",
        light: "#8D8D8D", 
      },
      fontFamily: {
        gilroy: ["Poppins", "sans-serif"],
      },
    },
    plugins: [],
  }
}
