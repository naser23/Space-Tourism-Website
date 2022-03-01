import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import DesktopBg from "./assets/home/background-home-desktop.jpg";
import MobileBg from "./assets/home/background-home-mobile.jpg";
import TabletBg from "./assets/home/background-home-tablet.jpg";

function App() {
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover sm: bg-mobile-bg md: bg-tablet-bg lg:bg-desktop-bg xl:bg-desktop-bg"></div>
  );
}

export default App;
