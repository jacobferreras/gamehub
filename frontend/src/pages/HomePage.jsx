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
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-black opacity-90 bg-[url('/assets/HomeBgMobile.png')]  sm:bg-[url('/assets/HomeBg640.png')]  lg:bg-[url('/assets/HomeBg1024.png')]  2xl:bg-[url('/assets/HomeBg.png')]">
      <div className="absolute inset-0 items-center justify-center text-center pt-55 lg:text-start lg:justify-center lg:items-center lg:px-4 lg:pt-38 ">
        <h1 className="font-bold text-5xl text-white font-[Bebas Neue] pb-5 sm:pt-30 sm:text-6xl md:text-7xl md:pb-2 lg:text-7xl lg:pr-80 lg:pb-2 2xl:text-8xl 2xl:pr-300 2xl:pl-8">
          Welcome to GameHub
        </h1>
        <h2 className=" text-lg text-white font-semibold pb-5 px-4 sm:text-xl lg:text-lg lg:pl-2 lg:pr-158 2xl:pl-10 2xl:text-2xl ">
          Tournaments, News, Builds, and Community — All in One Place
        </h2>
        <div className="lg:pl-2 2xl:pl-10">
          <button className="btn bg-transparent backdrop-blur-sm border-white font-bold 2xl:btn-xl">
            ENTER HUB
          </button>
        </div>
      </div>

      <div className="pt-134 flex flex-col justify-center items-center gap-2 sm:flex-row sm:pt-168 sm:gap-1 sm:justify-around xs:px-4 sm:px-2 md:px-4 lg:px-10 lg:gap-0 2xl:pt-154 2xl:flex-wrap 2xl:flex-row 2xl:pr-280 2xl:gap-y-4 ">
        <div className="card w-96 bg-base-100 card-xs shadow-sm xs:w-full sm:w-86 md:w-auto 2xl:w-86">
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={ValorantIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col">
              <h1 className="card-title text-sm font-bold">Valorant</h1>
              <p>Agent Guides, News & Updates, and Patch Notes,</p>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 card-xs shadow-sm xs:w-full sm:w-auto md:w-auto 2xl:w-86">
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={DotaIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col">
              <h1 className="card-title text-sm font-bold">Dota 2</h1>
              <p>Hero Guide, News & Esports, and Patch Notes</p>
            </div>
          </div>
        </div>

        <div className="card w-96 bg-base-100 card-xs shadow-sm xs:w-full sm:w-auto md:w-auto 2xl:w-86">
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={NbaIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col">
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
