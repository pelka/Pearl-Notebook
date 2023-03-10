const colors = require('tailwindcss/colors');

module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        gray: colors.gray,
        zinc: colors.zinc,
        orange: colors.orange,
      },
    },
  },
  plugins: [],
};
