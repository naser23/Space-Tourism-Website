import React from "react";
import CloseIcon from "../../assets/shared/icon-close.svg";
import { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { v4 as uuidv4 } from "uuid";

function MobileNav() {
  const { navOpen, controlNav } = useContext(NavbarContext);

  // const menuVariants = {
  //   open: {
  //     animate: { opacity: 0, x: 0 },
  //   },
  //   closed: {
  //     animate: { opacity: 0, x: "-100%" },
  //   },
  // };

  return (
    <nav className="w-2/3 h-screen z-10 absolute bg-clear-white backdrop-filter backdrop-blur-xl right-0 px-4">
      <div className="flex justify-end">
        <button className="mt-8" onClick={controlNav}>
          <img className="w-8 h-8" src={CloseIcon} alt="close-icon" />
        </button>
      </div>
      <ul className="text-white pt-14 flex flex-col gap-8 pl-4">
        <Link to="/"> 00 HOME</Link>
        <Link to="/Destination"> 01 DESTINATION</Link>
        <Link to="/Crew"> 02 CREW</Link>
        <Link to="/Technology"> 03 TECHNOLOGY</Link>
      </ul>
    </nav>
  );
}

export default MobileNav;