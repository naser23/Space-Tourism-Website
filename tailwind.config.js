module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "desktop-bg": "url('./assets/home/background-home-desktop.jpg')",
        "mobile-bg": "url('./assets/home/background-home-mobile.jpg')",
        "tablet-bg": "url('./assets/home/background-home-tablet.jpg')",
      },
    },
  },
  plugins: [],
};
