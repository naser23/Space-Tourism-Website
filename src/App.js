import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./layout/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="w-screen h-screen bg-no-repeat bg-cover sm: bg-mobile-bg md: bg-tablet-bg lg:bg-desktop-bg xl:bg-desktop-bg">
      <Navbar />
    </div>
  );
}

export default App;
