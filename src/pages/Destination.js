import React from "react";
import BgDesktop from "../assets/destination/background-destination-desktop.jpg";
import Navbar from "../components/layout/Navbar";
import MoonImg from "../assets/destination/image-moon.png";

function Destination() {
  return (
    <main className="text-white w-screen h-screen sm:h-full md:h-screen lg:h-screen bg-no-repeat bg-cover sm: bg-destinationMobile md: bg-destinationTablet lg:bg-destinationDesktop xl:bg-destinationDesktop">
      <Navbar />
      <section className="pt-4 flex flex-col items-center">
        <h1>
          <span className="text-slate-600">01</span> PICK YOUR DESTINATION
        </h1>
        <img className="sm: w-48 sm: h-52 pt-8" src={MoonImg} alt="moon img" />
      </section>
      <section>
        <nav>
          <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </nav>
      </section>
    </main>
  );
}

export default Destination;
