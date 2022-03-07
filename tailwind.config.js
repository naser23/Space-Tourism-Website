module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-bg": "url('./assets/home/background-home-desktop.jpg')",
        "mobile-bg": "url('./assets/home/background-home-mobile.jpg')",
        "tablet-bg": "url('./assets/home/background-home-tablet.jpg')",
      },
      colors: {
        "clear-white": "rgb(255, 255, 255, 0.1)",
        "test-color": "#F5F5F582",
      },
      fontFamily: {
        "belle-fair": "'Bellefair', serif",
      },
      active: {
        "active-link": ["lg:h-full"],
      },
    },
  },
  plugins: [],
};
