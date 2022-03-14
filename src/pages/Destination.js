import React from "react";
import BgDesktop from "../assets/destination/background-destination-desktop.jpg";
import Navbar from "../components/layout/navbar/Navbar";
import MoonImg from "../assets/destination/image-moon.png";
import GetData from "../context/GetData";
import NavbarContext from "../context/NavbarContext";
import { useContext } from "react";

function Destination() {
  const { data } = useContext(NavbarContext);
  const DestinationData = data.destinations;
  console.log(DestinationData);

  return (
    <main className="text-white w-screen h-screen sm:h-full md:h-screen lg:h-screen bg-no-repeat bg-cover bg-destinationMobile md:bg-destinationTablet  lg:bg-destinationDesktop xl:bg-destinationDesktop">
      <Navbar />
      <div className="lg:flex lg:justify-evenly lg:pt-8 ">
        <section className="flex flex-col items-center lg:justify-start">
          <h1 className="lg:text-3xl pb-4 lg:pb-0">
            <span className="text-slate-600">01</span> PICK YOUR DESTINATION
          </h1>
          <img
            className="w-48 h-48 lg:w-auto lg:pt-12 lg:h-auto"
            src={MoonImg}
            alt="moon img"
          />
        </section>
        <section className="flex flex-col items-center lg:items-start lg:justify-center lg:w-1/3">
          <nav>
            <ul className="text-white flex items-center gap-4 pt-4 h-12 lg:pt-0 lg:gap-8 lg:text-xl ">
              <li>MOON</li>
              <li>MARS</li>
              <li>EUROPA</li>
              <li>TITAN</li>
            </ul>
          </nav>
          <div className="pt-4 flex flex-col items-center lg:pt-16 lg:items-start">
            <h1 className="text-5xl lg:text-8xl">MOON</h1>
            <p className="text-center px-4 lg:text-left lg:px-0 lg:pb-8 text-xl">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              magnam eligendi soluta minima molestias architecto, voluptatem
              error culpa totam fuga libero, harum a, accusamus rerum est
              similique aliquam assumenda sunt!
            </p>
            <div className="w-5/6 h-1 bg-clear-white mt-4 lg:w-full"></div>
            <div className="flex flex-col items-center gap-4 pt-4 lg:flex-row lg:w-4/5 lg:justify-between">
              <div>
                <h2 className="text-heading">AVG. Distance</h2>
                <p className="text-3xl">300,000</p>
              </div>
              <div>
                <h2 className="text-heading">EST. Travel Time</h2>
                <p className="text-3xl">3 Days</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Destination;
