import React from "react";
import backgroundImage from "../assets/DOTA4.jpg";
const Dota2AccountScreen = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    ></div>
  );
};

export default Dota2AccountScreen;
