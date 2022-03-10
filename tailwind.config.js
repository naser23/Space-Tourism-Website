module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "home-desktop-bg": "url('./assets/home/background-home-desktop.jpg')",
        "home-mobile-bg": "url('./assets/home/background-home-mobile.jpg')",
        "home-tablet-bg": "url('./assets/home/background-home-tablet.jpg')",
        destinationDesktop:
          "url('./assets/destination/background-destination-desktop.jpg')",
        destinationMobile:
          "url('./assets/destination/background-destination-mobile.jpg')",
        destinationTablet:
          "url('./assets/destination/background-destination-tablet.jpg')",
        CrewDesktop: "url('./assets/crew/background-crew-desktop.jpg')",
        CrewMobile: "url('./assets/crew/background-crew-mobile.jpg')",
        CrewTablet: "url('./assets/crew/background-crew-tablet.jpg')",
        technologyDesktop:
          "url('./assets/technology/background-technology-desktop.jpg')",
        technologyMobile:
          "url('./assets/technology/background-technology-mobile.jpg')",
        technologyTablet:
          "url('./assets/technology/background-technology-tablet.jpg')",
      },
      colors: {
        "clear-white": "rgb(255, 255, 255, 0.1)",
        "test-color": "#F5F5F582",
        heading: "#D0D6f9",
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
