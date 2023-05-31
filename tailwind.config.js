/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        blue: "#292fa7",
        darkblue: "#030320",
      },
      screens: {
        'laptop-xl' :  { 'max': '1440px' },
        // => @media (max-width: 1440px) { ... }
        'laptop-l' :  { 'max': '1300px' },
        // => @media (max-width: 1300px) { ... }
        'laptop' :  { 'max': '1111px' },
        // => @media (max-width: 1111px) { ... }
        'tablet' :  { 'max': '768px' },
        // => @media (max-width: 768px) { ... }
        'mobile-xl' :  { 'max': '510px' },
        // => @media (max-width: 510px) { ... }
        'mobile-l' :  { 'max': '425px' },
        // => @media (max-width: 425px) { ... }
        'mobile-m' :  { 'max': '375px' },
        // => @media (max-width: 375px) { ... }
        'mobile-s' :  { 'max': '320px' },
        // => @media (max-width: 320px) { ... }
      },
    },
  },
  plugins: [],
}