import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navbar from "./components/layout/Navbar";
import { NavbarProvider } from "./context/NavbarContext";

function App() {
  return (
    <NavbarProvider>
      <Router>
        <div className="w-screen h-screen sm:h-full md:h-screen lg:h-screen bg-no-repeat bg-cover sm:bg-mobile-bg md: bg-tablet-bg lg:bg-desktop-bg xl:bg-desktop-bg">
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Destination" element={<Destination />}></Route>
            <Route path="/Crew" element={<Crew />}></Route>
            <Route path="/Technology" element={<Technology />}></Route>
          </Routes>
        </div>
      </Router>
    </NavbarProvider>
  );
}

export default App;
