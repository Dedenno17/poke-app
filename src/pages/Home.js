import React from "react";

import HomeComponent from "../components/Home/HomeComponent";
import pokeball from "../assets/pokeball.png";

function Home() {
  return (
    <div className="bg-primaryWhite w-full min-h-[100vh] relative">
      <img
        src={pokeball}
        alt="pokeball"
        className="absolute w-64 h-64 z-0 -top-36 -right-24 opacity-60"
      />
      <HomeComponent />
    </div>
  );
}

export default Home;
