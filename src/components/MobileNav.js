import React from "react";
import CloseIcon from "../assets/shared/icon-close.svg";
import { useContext } from "react";
import NavbarContext from "../context/NavbarContext";
import { motion, AnimatePresence } from "framer-motion";

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
    <AnimatePresence>
      <motion.nav
        key="nav"
        initial={{ x: 0, width: 0 }}
        animate={{ x: 0, width: "66%" }}
        exit={{ width: 0 }}
        className="w-2/3 h-screen z-10 absolute bg-slate-500 right-0 px-4"
      >
        <div className="flex justify-end">
          <button className="mt-8" onClick={controlNav}>
            <img className="w-8 h-8" src={CloseIcon} alt="close-icon" />
          </button>
        </div>
        <ul className="text-white pt-14 flex flex-col gap-8 pl-4">
          <li>00 HOME</li>
          <li>01 DESTINATION</li>
          <li>02 CREW</li>
          <li>03 TECHNOLOGY</li>
        </ul>
      </motion.nav>
    </AnimatePresence>
  );
}

export default MobileNav;
