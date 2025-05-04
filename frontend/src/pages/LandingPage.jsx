import React from "react";
import { motion } from "motion/react";
import { Link } from "react-router-dom";
import ValorantIcon from "../assets/valorant_icon.png";
import DotaIcon from "../assets/dota2_icon.png";
import PubgIcon from "../assets/PubgIcon.png";

const LandingPage = () => {
  return (
    <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-black opacity-90 bg-[url('/assets/HomeBgMobile.png')] sm:bg-[url('/assets/HomeBg640.png')] lg:bg-[url('/assets/HomeBg1024.png')] 3xl:bg-[url('/assets/HomeBg.png')]">
      <div className="absolute inset-0 items-center justify-center text-center pt-55 lg:text-start lg:justify-center lg:items-center lg:px-4 lg:pt-38">
        <motion.h1
          className="font-bold  text-5xl text-white font-[Bebas Neue] pb-5 sm:pt-30 sm:text-6xl md:text-7xl md:pb-2 lg:text-7xl lg:pr-80 lg:pb-2 xl:pl-4 xl:text-7xl xl:pr-100 3xl:text-8xl 3xl:pr-300 3xl:pl-8"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to GameHub
        </motion.h1>

        <motion.h2
          className="text-lg text-white font-semibold pb-5 px-4 sm:text-xl lg:text-lg lg:pl-2 lg:pr-158 xl:pl-6 xl:text-xl 3xl:pl-10 3xl:text-2xl"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          Tournaments, News, Builds, and Community — All in One Place
        </motion.h2>

        <motion.div
          className="lg:pl-2 xl:pl-6 3xl:pl-10"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1 }}
        >
          <motion.button
            className="btn bg-transparent backdrop-blur-sm border-white font-bold 3xl:btn-xl"
            whileHover={{
              scale: 1.1,
              backgroundColor: "rgba(255, 255, 255, 0.2)",
            }}
            whileTap={{ scale: 0.9 }}
          >
            <Link to="/app/home">ENTER HUB</Link>
          </motion.button>
        </motion.div>
      </div>

      <div className="pt-136 flex flex-col justify-center items-center gap-2 sm:flex-row sm:pt-170 sm:gap-1 sm:justify-around xs:px-4 sm:px-2 md:px-4 lg:px-12 lg:gap-2 xl:px-24 3xl:pt-154 3xl:items-start 3xl:place-items-start 3xl:flex-wrap 3xl:flex-row 3xl:pr-280 3xl:gap-y-4">
        <motion.div
          className="card w-96 bg-base-100 card-xs shadow-sm xs:w-full sm:w-86 md:w-auto"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={ValorantIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col">
              <h1 className="card-title text-sm font-bold">Valorant</h1>
              <p>Agent Guides, News & Updates, and Patch Notes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card w-96 bg-base-100 card-xs shadow-sm xs:w-full sm:w-86 md:w-auto"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.95 }}
        >
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={DotaIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col">
              <h1 className="card-title text-sm font-bold">Dota 2</h1>
              <p> Hero Guide, News & Esports, and Patch Notes</p>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="card w-96 bg-base-100 card-xs shadow-sm xs:w-full sm:w-86 md:w-auto"
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 1.05 }}
        >
          <div className="card-body flex flex-row items-center justify-start">
            <figure>
              <img src={PubgIcon} alt="" className="rounded-xl" />
            </figure>
            <div className="flex flex-col">
              <h1 className="card-title text-sm font-bold">PUBG</h1>
              <p>Build Lab, 2K Newsroom, and Gameplay Patch Notes</p>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LandingPage;
