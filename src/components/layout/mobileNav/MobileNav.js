import React from "react";
import CloseIcon from "../../../assets/shared/icon-close.svg";
import { useContext } from "react";
import NavbarContext from "../../../context/NavbarContext";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

function MobileNav() {
  const { navOpen, controlNav } = useContext(NavbarContext);

  return (
    <nav className="nav-mobile">
      <div className="nav-mobile-container">
        <button className="close-nav" onClick={controlNav}>
          <img src={CloseIcon} alt="close-icon" />
        </button>
      </div>
      <ul className="nav-links-mobile">
        <NavLink
          className={(navData) => (navData.isActive ? "active-mobile" : "")}
          to="/"
          onClick={controlNav}
        >
          00 HOME
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active-mobile" : "")}
          to="/Destination"
          onClick={controlNav}
        >
          01 DESTINATION
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active-mobile" : "")}
          to="/Crew"
          onClick={controlNav}
        >
          02 CREW
        </NavLink>
        <NavLink
          className={(navData) => (navData.isActive ? "active-mobile" : "")}
          to="/Technology"
          onClick={controlNav}
        >
          03 TECHNOLOGY
        </NavLink>
      </ul>
    </nav>
  );
}

export default MobileNav;
