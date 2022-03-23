import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";
import { useContext, useState } from "react";
import NavbarContext from "../../context/NavbarContext";
import DouglasImg from "../../assets/crew/image-douglas-hurley.png";
import MarkImg from "../../assets/crew/image-mark-shuttleworth.png";
import VictorImg from "../../assets/crew/image-victor-glover.png";
import AnoushehImg from "../../assets/crew/image-anousheh-ansari.png";

function Crew() {
  const { data } = useContext(NavbarContext);
  const crewData = data.crew;

  const [index, setIndex] = useState(0);
  const [activeId, setActiveId] = useState("");

  const crewPictures = [DouglasImg, MarkImg, VictorImg, AnoushehImg];

  return (
    <div className="crew-container">
      <main className="crew-content-container">
        <h1 className="crew-display-header">
          <span className="gray-text">02</span> MEET YOUR CREW
        </h1>
        <img className="crew-member" src={crewPictures[index]} alt="crew-img" />
        <div className="crew-divider"></div>
        <div className="crew-ux">
          <nav className="crew-member-navigation">
            <ul>
              {crewData &&
                crewData.map((member) => (
                  <li
                    key={crewData.indexOf(member)}
                    onClick={() => {
                      setIndex(crewData.indexOf(member));
                    }}
                    className={
                      index === crewData.indexOf(member)
                        ? "active-link"
                        : "inactive-link"
                    }
                  ></li>
                ))}
            </ul>
          </nav>
          <section className="crew-member-info">
            <h2 className="member-role">{crewData && crewData[index].role}</h2>
            <h1 className="member-name">{crewData && crewData[index].name}</h1>
            <p className="member-bio">{crewData && crewData[index].bio}</p>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Crew;
