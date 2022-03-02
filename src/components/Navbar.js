import React from "react";
import Logo from "../assets/shared/logo.svg";
import HamburgerMenu from "../assets/shared/icon-hamburger.svg";

function Navbar() {
  return (
    <div className=" pt-6 px-7 h-16 md:h-16 xl:pt-16 xl:px-16 lg:h-1/6">
      <div className="flex justify-between items-center">
        <img src={Logo} alt="Logo" />
        <button className=" block lg:hidden xl:hidden">
          <img className="w-8 h-7" src={HamburgerMenu} alt="hamburger menu" />
        </button>
        <nav className="w-3/5 h-20 bg-white/10 filter backdrop-blur-lg justify-end items-center hidden lg:flex xl:flex ">
          <ul className="w-4/5 flex justify-evenly text-lg gap-4 text-white">
            <li>00 HOME</li>
            <li>01 DESTINATION</li>
            <li>02 CREW</li>
            <li>03 TECHNOLOGY</li>
          </ul>
        </nav>
      </div>
    </div>
  );
}

export default Navbar;
