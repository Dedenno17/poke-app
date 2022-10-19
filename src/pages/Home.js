import React from "react";

import HomeComponent from "../components/Home/HomeComponent";
import pokeball from "../assets/pokeball.png";

function Home() {
  return (
    <div className="w-full min-h-[100vh] relative mx-auto">
      <img
        src={pokeball}
        alt="pokeball"
        className="absolute w-72 h-72 z-0 -top-40 -right-32 opacity-60"
      />
      <HomeComponent />
    </div>
  );
}

export default Home;
