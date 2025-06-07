// tailwind.config.js
import flowbitePlugin from 'flowbite/plugin';
import tailwindScrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  
  darkMode: 'class', // Make sure this is set to use dark mode properly
  theme: {
    extend: {
      colors: {
        brand: {
          yellow: '#FACC15',        // Matches the yellow in your logo
          yellowDark: '#EAB308',    // Slightly deeper yellow
          black: '#0F0F0F',         // Deep rich black for dark backgrounds
          grayLight: '#F9FAFB',     // Soft background for light mode
          gold: '#FFD700',
                neonYellow: '#FFE600',
                neonPink: '#FF0080',
                deepPurple: '#1B0033',
                neonRed: '#FF0033',
                      
        },
      },
    },
  },

  plugins: [flowbitePlugin, tailwindScrollbar],
};
