import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import { useState, useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import LaunchImg from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import CapsuleImg from "../../assets/technology/image-space-capsule-landscape.jpg";
import SpacePortImg from "../../assets/technology/image-spaceport-landscape.jpg";

function Technology() {
  const { data } = useContext(NavbarContext);
  const technologyData = data.technology;
  console.log(technologyData);

  const [index, setIndex] = useState(0);
  const techPictures = [LaunchImg, CapsuleImg, SpacePortImg];

  return (
    <div className="technology-container">
      <main className="technology-content-container">
        <h1 className="crew-display-header">
          <span className="gray-text">03</span> SPACE LAUNCH 101
        </h1>
        <img
          className="technology-hero-img"
          src={techPictures[index]}
          alt="technology img"
        />
        <section className="technology-ux">
          <nav className="technology-navigation">
            <ul>
              {technologyData &&
                technologyData.map((page) => (
                  <li
                    key={technologyData.indexOf(page)}
                    onClick={() => setIndex(technologyData.indexOf(page))}
                    className={
                      index == technologyData.indexOf(page)
                        ? "technology-active"
                        : ""
                    }
                  >
                    {technologyData.indexOf(page) + 1}
                  </li>
                ))}
            </ul>
          </nav>

          <div className="technology-info">
            <h1 className="info-subheader">THE TERMINOLOGY...</h1>
            <h1 className="info-title">
              {technologyData && technologyData[index].name}
            </h1>
            <p className="info-description">
              {technologyData && technologyData[index].description}
            </p>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Technology;
