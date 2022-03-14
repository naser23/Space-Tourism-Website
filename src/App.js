import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Destination from "./pages/Destination";
import Crew from "./pages/Crew";
import Technology from "./pages/Technology";
import Navbar from "./components/layout/Navbar";
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
