import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/destination/Destination";
import Crew from "./pages/crew/Crew";
import Technology from "./pages/technology/Technology";
import Navbar from "./components/layout/navbar/Navbar";
import { NavbarProvider } from "./context/NavbarContext";

function App() {
  return (
    <NavbarProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Destination" element={<Destination />}></Route>
          <Route path="/Crew" element={<Crew />}></Route>
          <Route path="/Technology" element={<Technology />}></Route>
        </Routes>
      </Router>
    </NavbarProvider>
  );
}

export default App;
