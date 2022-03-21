import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import { useState, useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import LaunchImg from "../../assets/technology/image-launch-vehicle-landscape.jpg";
import CapsuleImg from "../../assets/technology/image-space-capsule-landscape.jpg";

function Technology() {
  const { data } = useContext(NavbarContext);
  const technologyData = data.technology;
  console.log(technologyData);

  return (
    <div className="technology-container">
      <Navbar />
      <main className="technology-content-container">
        <h1 className="crew-display-header">
          <span className="gray-text">03</span> SPACE LAUNCH 101
        </h1>
        <img
          className="technology-hero-img"
          src={LaunchImg}
          alt="technology img"
        />
        <section className="technology-ux">
          <nav className="technology-navigation">
            <ul></ul>
          </nav>
        </section>
      </main>
    </div>
  );
}

export default Technology;
