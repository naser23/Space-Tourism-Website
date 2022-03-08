module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop-bg": "url('./assets/home/background-home-desktop.jpg')",
        "home-mobile-bg": "url('./assets/home/background-home-mobile.jpg')",
        "home-tablet-bg": "url('./assets/home/background-home-tablet.jpg')",
        "destination-desktop-bg":
          "url('./assets/destination/background-destination-desktop.jpg')",
        "destination-mobile-bg":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "destination-tablet-bg":
          "url('./assets/destination/background-destination-tablet.jpg')",
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
