/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        custom: "0 8px 15px #234342",
      },
      colors: {
        main: "#1976d2",
        second: "#32205cff",
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        
      },
      
    },

   
  },
  daisyui: {
    themes: [ "night"],
  },
  plugins: [require("daisyui")],
};
