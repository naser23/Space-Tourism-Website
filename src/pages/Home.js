import React from "react";
import Navbar from "../components/layout/Navbar";

function Home() {
  return (
    <div className="w-screen h-screen sm:h-full md:h-screen lg:h-screen bg-no-repeat bg-cover sm: bg-home-mobile-bg md:bg-home-tablet-bg lg:bg-home-desktop-bg xl:bg-home-desktop-bg">
      <Navbar />
      <div className="flex flex-col items-center lg:flex-row lg:pt-48 lg:justify-around">
        <section className="text-white pt-8 text-center lg:w-1/3 lg:text-left">
          <h1 className="text-xl font-belle-fair lg:text-2xl">
            SO, YOU WANT TO TRAVEL TO
          </h1>
          <p className="text-7xl pt-6 pb-4 font-sans lg:text-8xl">SPACE</p>
          <p className="text-md text-center px-4 lg:text-left lg:px-0 lg:text-lg">
            Let's face it, if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            We'll sit back, and relax because we'll give you a truly out of this
            world experience!
          </p>
        </section>

        <div className="w-1/2 h-48 bg-white p-auto mt-24 flex justify-center items-center rounded-full lg:w-60 lg:h-60 lg:mt-0 relative lg:before:w-60 lg:before:h-60 before:rounded-full before:bg-clear-white before:absolute hover:before:transition-all hover:before:scale-150">
          <p className="text-2xl tracking-widest font-belle-fair">EXPLORE</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
