import React from "react";
// import HomeBg from "../assets/HomeBg.png";
// // import HomeBgMobile from "../assets/HomeBgMobile.png";
import ValorantIcon from "../assets/valorant_icon.png";
import DotaIcon from "../assets/dota2_icon.png";
import NbaIcon from "../assets/2k_logo.png";

<link
  href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap"
  rel="stylesheet"
></link>;

const HomePage = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center bg-[url('/assets/HomeBgMobile.png')] sm:bg-[url('/assets/HomeBg640.png')] min-h-screen lg:bg-[url('/assets/HomeBg.png')] relative">
      <div className="absolute inset-0 items-center justify-center text-center pt-55">
        <h1 className="font-bold text-6xl text-white font-[Bebas Neue] pb-5 sm:pt-15">
          Welcome to GameHub
        </h1>
        <h2 className=" text-md text-white font-bold pb-5">
          Tournaments, News, Builds, and Community — All in One Place
        </h2>
        <button className="btn bg-transparent backdrop-blur-sm border-white font-bold">
          ENTER HUB
        </button>
      </div>

      <div className="pt-134 flex flex-col justify-center items-center gap-2 sm:flex-row sm:pt-154 sm:gap-1 sm:justify-around sm:px-2">
        <div className="card w-96 bg-base-100 card-xs shadow-sm sm:w-76 sm:h-17">
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={ValorantIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col items-start justify-center">
              <h1 className="card-title text-sm font-bold">Valorant</h1>
              <p>Agent Guides, News & Updates, Patch Notes, and Pro Play</p>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 card-xs shadow-sm sm:w-76">
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={DotaIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col items-start justify-center ">
              <h1 className="card-title text-sm font-bold">Dota 2</h1>
              <p>Hero Guide, News & Esports, and Patch Notes</p>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 card-xs shadow-sm sm:w-76">
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={NbaIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col items-start justify-center ">
              <h1 className="card-title text-sm font-bold">NBA2K</h1>
              <p>Build Lab, 2K Newsroom, Gameplay Patch Notes</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
