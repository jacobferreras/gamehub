import React from "react";
import BgAnimation from "../assets/DarkBg.png";
import JuggernutIcon from "../assets/JuggernutIcon.png";
import JettIcon from "../assets/JettIcon.png";
import SupplyIcon from "../assets/SupplyIcon.png";

const HomePage = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${BgAnimation})`,
      }}
    >
      {/* Juggernut Icon */}
      <div className="absolute juggernut-icon">
        <img
          className="h-180 animate-pan-left"
          src={JuggernutIcon}
          alt="Juggernut Icon"
        />
      </div>

      {/* Jett Icon */}
      <div className="absolute jett-icon">
        <img
          className="h-130 animate-pan-right"
          src={JettIcon}
          alt="Jett Icon"
        />
      </div>

      {/* Supply Icon */}
      <div className="absolute supply-icon">
        <img
          className="h-100 animate-pan-up"
          src={SupplyIcon}
          alt="Supply Icon"
        />
      </div>
    </div>
  );
};

export default HomePage;
