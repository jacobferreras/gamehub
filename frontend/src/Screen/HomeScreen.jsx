import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import BackgroundNews from "../assets/Home/bg.png";
import TrophyIcon from "../assets/trophy_icon.png";
import NewsIcon from "../assets/news_icon.png";
import GuidesIcon from "../assets/guide_icon.png";
import Carousel from "../components/ui/HomeScreen/Carousel";
import LargeScreenNews from "../components/ui/HomeScreen/LargeScreenNews";
import SmallScreenNews from "../components/ui/HomeScreen/SmallScreenNews";
import HighlightSection from "../components/ui/HomeScreen/HighlightSection";
import ValorantGameSchedule from "../components/ui/HomeScreen/ValorantGameSchedule";
import DotaGamesSchedule from "../components/ui/HomeScreen/DotaGameSchedule";
import PubgGameSchedule from "../components/ui/HomeScreen/PubgGameSchedule";

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
            Your Ultimate Valorant Hub — News, Tournaments, Agent Guides & Pro
            Players
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
                <img src={TrophyIcon} alt="" className="rounded-xl" />
              </figure>
              <div className="flex flex-col">
                <h1 className="card-title text-sm font-bold">Tournament</h1>
                <p>Challengers to Champions, match schedules, and results</p>
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
                <img src={NewsIcon} alt="" className="rounded-xl" />
              </figure>
              <div className="flex flex-col">
                <h1 className="card-title text-sm font-bold">News</h1>
                <p>
                  {" "}
                  Catch the latest Valorant news, roster changes, and patch
                  updates
                </p>
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
                <img src={GuidesIcon} alt="" className="rounded-xl" />
              </figure>
              <div className="flex flex-col">
                <h1 className="card-title text-sm font-bold">Guides</h1>
                <p>
                  Valorant guides — perfect for beginners, master every agent,
                  and mechanics
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <div className="pt-8 bg-neutral-950">
        <h1 className="flex justify-start pl-2 pb-2 text-2xl font-semibold md:pl-8 3xl:text-4xl">
          Latest News
        </h1>
        <SmallScreenNews />
        <LargeScreenNews />
        <div className="my-4 border-t border-gray-600 opacity-50"></div>
        <h1 className="flex justify-center pl-2 pb-4  text-2xl font-semibold md:pl-8 3xl:text-4xl ">
          Game Schedule
        </h1>
        <ValorantGameSchedule />
        <div className="my-4 border-t border-gray-600 opacity-50"></div>
        <Carousel />
        <div className="my-4 border-t border-gray-600 opacity-50"></div>
        <h1 className="flex justify-start pl-2 pb-2 text-2xl font-semibold md:pl-8 3xl:text-4xl">
          Game Highlights
        </h1>
        <HighlightSection />
      </div>
    </>
  );
};

export default HomePage;
