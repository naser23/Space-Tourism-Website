import React from "react";
import Logo from "../../assets/shared/logo.svg";
import HamburgerMenu from "../../assets/shared/icon-hamburger.svg";
import MobileNav from "./MobileNav";
import { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import { motion, AnimatePresence } from "framer-motion";
import { NavLink, useMatch, useResolvedPath } from "react-router-dom";

function Navbar() {
  const { navOpen, controlNav } = useContext(NavbarContext);

  // function ActiveLink({ children, to, ...props }) {
  //   let resolved = useResolvedPath(to);
  //   let match = useMatch({ path: resolved.pathname, end: true });

  //   return (
  //     <>
  //       <Link
  //         style={{ textDecoration: match ? "underline" : "none" }}
  //         to={to}
  //         {...props}
  //       >
  //         {children}
  //       </Link>
  //     </>
  //   );
  // }

  // className = "lg:h-full lg:flex lg:items-center lg:border-b-4";

  return (
    <div className="h-20 px-7 md:h-16 xl:pt-16 xl:px-16 lg:h-1/6 relative">
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
      <div className="flex justify-between items-center pt-8 md:pt-4">
        <img src={Logo} alt="Logo" />
        <button className=" block lg:hidden xl:hidden" onClick={controlNav}>
          <img className="w-8 h-7" src={HamburgerMenu} alt="hamburger menu" />
        </button>
        <nav className="w-3/5 h-20 bg-clear-white backdrop-filter backdrop-blur-xl justify-end items-center hidden lg:flex xl:flex lg:w-1/2">
          <ul className="w-4/5 flex justify-evenly text-lg gap-4 text-white lg:pr-4 lg:h-full lg:flex lg:items-center">
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/"
            >
              00 HOME
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Destination"
            >
              01 DESTINATION
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Crew"
            >
              02 CREW
            </NavLink>
            <NavLink
              className={(navData) => (navData.isActive ? "active" : "")}
              to="/Technology"
            >
              03 TECHNOLOGY
            </NavLink>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
