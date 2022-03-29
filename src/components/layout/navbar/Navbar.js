import React from "react";
import Logo from "../../../assets/shared/logo.svg";
import HamburgerMenu from "../../../assets/shared/icon-hamburger.svg";
import MobileNav from "../mobileNav/MobileNav";
import { useContext } from "react";
import NavbarContext from "../../../context/NavbarContext";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const { navOpen, controlNav } = useContext(NavbarContext);

  return (
    <div className="navbar">
      <AnimatePresence>
        {navOpen && (
          <motion.div
            key={1}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <MobileNav key={1} />
          </motion.div>
        )}
      </AnimatePresence>
      <div className="navbar-container">
        <img src={Logo} alt="Logo" />
        <button className="hamburger-logo" onClick={controlNav}>
          <img src={HamburgerMenu} alt="hamburger menu" />
        </button>
        <nav className="navbar-desktop">
          <div className="nav-links">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              className="link"
              to="/"
            >
              00 HOME
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              className="link"
              to="/Destination"
            >
              01 DESTINATION
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              className="link"
              to="/Crew"
            >
              02 CREW
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              className="link"
              to="/Technology"
            >
              03 TECHNOLOGY
            </NavLink>
          </div>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
