import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import ValorantIcon from "../assets/valorant_icon.png";
import DotaIcon from "../assets/dota2_icon.png";
import PubgIcon from "../assets/PubgIcon.png";
import Carousel from "../components/ui/Carousel";
import LargeScreenNews from "../components/ui/LargeScreenNews";
import SmallScreenNews from "../components/ui/SmallScreenNews";
import HighlightSection from "../components/ui/HighlightSection";
import ValorantGameSchedule from "../components/ui/ValorantGameSchedule";
import DotaGamesSchedule from "../components/ui/dotaGameSchedule";
import PubgGameSchedule from "../components/ui/pubgGameSchedule";

const HomePage = () => {
  return (
    <>
      <div className="bg-cover bg-no-repeat bg-center min-h-screen bg-[url('/assets/Bg.png')] ">
        <div className="absolute inset-0 items-center justify-center text-center pt-55 md:pt-54 lg:text-start lg:justify-center lg:items-center lg:px-4 lg:pt-54 xl:pt-62 3xl:pt-62">
          <motion.h1
            className="font-bold text-center text-6xl text-zinc-100 font-[Bebas Neue] pb-2 sm:pt-30 sm:text-6xl md:text-6xl md:pb-2 lg:text-7xl  lg:pb-2  xl:text-8xl  3xl:text-9xl "
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            Welcome to GameHub
          </motion.h1>

          <motion.h2
            className="text-lg text-center text-zinc-100 font-semibold pb-5 px-4 sm:text-sm md:xl lg:text-xl  xl:text-2xl  3xl:text-3xl"
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
          ></motion.div>
        </div>

        <div className="pt-110 flex flex-col px-4 gap-2 xs:items-center sm:flex-row sm:pt-112  xs:px-4  md:pt-110 md:gap-2  lg:pt-120 lg:px-20 lg:gap-4 xl:pt-140 xl:px-24 3xl:pt-140 3xl:px-108">
          <motion.div
            className="card w-96 bg-base-100 card-xs shadow-sm sm:w-106"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="card-body flex flex-row">
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
            className="card w-96 bg-base-100 card-xs shadow-sm sm:w-106"
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
            className="card w-96 bg-base-100 card-xs shadow-sm sm:w-106 3xl:w-110"
            whileHover={{ scale: 1.08 }}
            whileTap={{ scale: 1.05 }}
          >
            <div className="card-body flex flex-row">
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

      <div className="pt-8 bg-neutral-900">
        <h1 className="flex justify-start pl-2 pb-2 text-2xl font-semibold md:pl-8 3xl:text-4xl">
          Latest News
        </h1>
        <SmallScreenNews />
        <LargeScreenNews />
        <div className="my-6 border-t border-gray-600 opacity-50"></div>
        <h1 className="flex justify-center pl-2 pb-4  text-2xl font-semibold md:pl-8 3xl:text-4xl ">
          Valorant Game Schedule
        </h1>
        <ValorantGameSchedule />
        <h1 className="flex justify-center pl-2 pb-4 text-2xl font-semibold md:pl-8 3xl:text-4xl ">
          Dota 2 Game Schedule
        </h1>
        <DotaGamesSchedule />
        <h1 className="flex justify-center pl-2 pb-4 text-2xl font-semibold md:pl-8 3xl:text-4xl ">
          PUBG Game Schedule
        </h1>
        <PubgGameSchedule />
        <div className="my-6 border-t border-gray-600 opacity-50"></div>
        <Carousel />
        <div className="my-6 border-t border-gray-600 opacity-50"></div>
        <h1 className="flex justify-start pl-2 pb-2 text-2xl font-semibold md:pl-8 3xl:text-4xl">
          Game Highlights
        </h1>
        <HighlightSection />
      </div>
    </>
  );
};

export default HomePage;
