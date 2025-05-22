import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover : "#fcf4ff",
        darkHover : "#2a004a",
        darkTheme : "#110001f"
      },
      fontFamily : {
        Outfit : ["Outfit", "sans-serif"],
        Ovo :  ["Ovo", "serif"]
      },
      boxShadow : {
        'black' : '2px 2px 0 #000',
        'white' : '2px 2px 0 #fff',
      },
      gridTemplateColumns: {
        'auto' : 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  plugins: [],
};
