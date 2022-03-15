import React from "react";
import BgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import Navbar from "../../components/layout/navbar/Navbar";
import MoonImg from "../../assets/destination/image-moon.png";
import GetData from "../../context/GetData";
import NavbarContext from "../../context/NavbarContext";
import { useContext } from "react";

function Destination() {
  const { data } = useContext(NavbarContext);
  const DestinationData = data.destinations;
  console.log(DestinationData);

  return (
    <main className="destination-container">
      <Navbar />
      <div className="content-container">
        <section className="destination-display">
          <h1 className="display-header">
            <span className="gray-text">01</span> PICK YOUR DESTINATION
          </h1>
          <img className="planet-image" src={MoonImg} alt="moon img" />
        </section>
        <section className="destination-info-container">
          <nav>
            <ul className="destination-options">
              <li className="light-gray-text">MOON</li>
              <li className="light-gray-text">MARS</li>
              <li className="light-gray-text">EUROPA</li>
              <li className="light-gray-text">TITAN</li>
            </ul>
          </nav>
          <div className="destination-info">
            <h1 className="planet-name">MOON</h1>
            <p className="planet-info">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Animi
              magnam eligendi soluta minima molestias architecto, voluptatem
              error culpa totam fuga libero, harum a, accusamus rerum est
              similique aliquam assumenda sunt!
            </p>
            <div className="divider"></div>
            <div className="planet-stats">
              <div>
                <h2 className="stats-header">AVG. Distance</h2>
                <p>300,000</p>
              </div>
              <div>
                <h2 className="stats-header">EST. Travel Time</h2>
                <p>3 Days</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Destination;
