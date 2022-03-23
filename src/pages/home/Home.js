import React from "react";
import Navbar from "../../components/layout/navbar/Navbar";

function Home() {
  return (
    <div className="home-container">
      <div className="content-container">
        <section className="home-text">
          <h1 className="home-header">SO, YOU WANT TO TRAVEL TO</h1>
          <p className="space">SPACE</p>
          <p className="persuasive-text">
            Let's face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            We'll sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </section>

        <div className="explore">
          <p className="explore-text">EXPLORE</p>
        </div>
      </div>
    </div>
  );
}

// w-1/2 h-48 bg-white p-auto mt-24 flex justify-center items-center rounded-full lg:w-60 lg:h-60 lg:mt-0 relative lg:before:w-60 lg:before:h-60 before:rounded-full before:bg-clear-white before:absolute hover:before:transition-all hover:before:scale-150

export default Home;
