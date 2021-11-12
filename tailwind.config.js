const colors = require('tailwindcss/colors')

module.exports = {
  purge: ['./src/pages/**/*.{js,ts,jsx,tsx}', './src/components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        "light-indigo": "#C9C2FD",
        "neon-pink": "#F152EC",
        "vaporware-blue": "#495BFE",
        "dark-indigo": "#624BA1",
        "lovely-peach": "#FF9D8A",
        "night-sky": "#221042",
        "cyan": colors.cyan,
        "amber": colors.amber,
        "teal": colors.teal,
        "rose": colors.rose,
        "fuchsia": colors.fuchsia
      },
      fontFamily: {
        "title": ['monoton', 'cursive'],
        "heading": ['spartan', 'sans-serif'],
        "content": ['incosolata', 'monospace'],
        "misc": ['Press\\ Start\\ 2P', 'cursive']
      }
    },
  },
  variants: {
    extend: {
      translate: ['group-hover']
    },
  },
  plugins: [],
}
