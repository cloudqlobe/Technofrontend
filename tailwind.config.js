module.exports = {
  content: [
    "./public/index.html",   // ⭐ ADD THIS
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        'phone-hide': '1100px',
        'desktop-900': '900px',
        'desktop-1100': '1100px',
        'desktop-1400': '1400px',
        'desktop-1430': '1430px',
        'desktop-1500': '1500px',
      },
    },
  },
  plugins: [],
};