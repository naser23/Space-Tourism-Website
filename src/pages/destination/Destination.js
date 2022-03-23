import React from "react";
import BgDesktop from "../../assets/destination/background-destination-desktop.jpg";
import Navbar from "../../components/layout/navbar/Navbar";
import MoonImg from "../../assets/destination/image-moon.png";
import MarsImg from "../../assets/destination/image-mars.png";
import EurpoaImg from "../../assets/destination/image-europa.png";
import TitanImg from "../../assets/destination/image-titan.png";
import GetData from "../../context/GetData";
import NavbarContext from "../../context/NavbarContext";
import { useContext, useState } from "react";

function Destination() {
  const { data } = useContext(NavbarContext);
  const info = data.destinations;
  const [index, setIndex] = useState(0);

  // const [currentPlanet, setCurrentPlanet] = useState("");

  let pictures = [MoonImg, MarsImg, EurpoaImg, TitanImg];

  return (
    <main className="destination-container">
      <div className="content-container">
        <section className="destination-display">
          <h1 className="display-header">
            <span className="gray-text">01</span> PICK YOUR DESTINATION
          </h1>
          <img className="planet-image" src={pictures[index]} alt="moon img" />
        </section>
        <section className="destination-info-container">
          <nav>
            <ul className="destination-options">
              {info &&
                info.map((planet) => (
                  <li
                    className="light-gray-text"
                    key={info.indexOf(planet)}
                    onClick={() => setIndex(info.indexOf(planet))}
                  >
                    {planet.name.toUpperCase()}
                  </li>
                ))}
            </ul>
          </nav>
          <div className="destination-info">
            <h1 className="planet-name">
              {info && info[index].name.toUpperCase()}
            </h1>
            <p className="planet-info">{info && info[index].description}</p>
            <div className="divider"></div>
            <div className="planet-stats">
              <div>
                <h2 className="stats-header">AVG. Distance</h2>
                <p>{info && info[index].distance}</p>
              </div>
              <div>
                <h2 className="stats-header">EST. Travel Time</h2>
                <p>{info && info[0].travel}</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

export default Destination;
