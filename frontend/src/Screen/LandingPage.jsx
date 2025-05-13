import React from "react";
import BgAnimation from "../assets/DarkBg.png";
import JuggernutIcon from "../assets/JuggernutIcon.png";
import JettIcon from "../assets/JettIcon.png";
import SupplyIcon from "../assets/SupplyIcon.png";

const LandingPage = () => {
  return (
    <div
      className="hero min-h-screen relative"
      style={{
        backgroundImage: `url(${BgAnimation})`,
        overflow: "hidden",
      }}
    >
      <div className="hidden 3xl:absolute 3xl:block juggernut-icon">
        <img
          className="h-180 animate-pan-left"
          src={JuggernutIcon}
          alt="Juggernut Icon"
        />
      </div>

      <div className="hidden 3xl:absolute 3xl:block jett-icon">
        <img
          className="h-130 animate-pan-right"
          src={JettIcon}
          alt="Jett Icon"
        />
      </div>

      <div className="hidden 3xl:absolute 3xl:block supply-icon">
        <img
          className="h-100 animate-pan-up"
          src={SupplyIcon}
          alt="Supply Icon"
        />
      </div>
    </div>
  );
};

export default LandingPage;
