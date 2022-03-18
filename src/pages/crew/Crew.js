import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import { useContext } from "react";
import NavbarContext from "../../context/NavbarContext";
import DouglasImg from "../../assets/crew/image-douglas-hurley.png";

function Crew() {
  const { data } = useContext(NavbarContext);
  const crewData = data.crew;
  console.log(crewData);

  return (
    <div className="crew-container">
      <Navbar />
      <main className="crew-content-container">
        <h1 className="crew-display-header">
          <span className="gray-text">02</span> MEET YOUR CREW
        </h1>
        <img className="crew-member" src={DouglasImg} alt="crew-img" />
        <div className="crew-divider"></div>
        <div className="crew-ux">
          <nav className="crew-member-navigation">
            <ul>
              <li></li>
              <li></li>
              <li></li>
              <li></li>
            </ul>
          </nav>
          <section className="crew-member-info">
            <h2 className="member-role">{crewData && crewData[0].role}</h2>
            <h1 className="member-name">{crewData && crewData[0].name}</h1>
            <p className="member-bio">{crewData && crewData[0].bio}</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Crew;
