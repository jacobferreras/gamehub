import React from "react";
import { motion } from "motion/react";
import ValorantIcon from "../assets/valorant_icon.png";
import DotaIcon from "../assets/dota2_icon.png";
import PubgIcon from "../assets/PubgIcon.png";
import HeadNewsCard from "../components/common/HeadNewsCard";
import NewsCard from "../components/common/NewsCard";

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
        <h1 className="flex justify-start pl-4 pb-2 text-2xl font-semibold">
          Latest News
        </h1>
        <div className="block lg:hidden">
          <div className="justify-start pb-3">
            <HeadNewsCard
              Title="DOTA 2"
              Description="awdawdaaswwa"
              ImageUrl="https://static.gosugamers.net/51/ee/b9/8e1b988745d3f49092838d35bf306c4878ffe13a257acd104ab522ead8.webp?w=1600"
              Width="430"
            />
          </div>
          <div className="block px-2 md:px-4">
            <div className="pb-2">
              <NewsCard
                Title="DOTA 2"
                Description="ADAASDASD"
                ImageUrl="https://hawk.live/storage/post-images/nightfall-left-tundr-esports-17946.jpg"
              />
            </div>
            <div className="pb-2">
              <NewsCard
                Title="Valorant"
                Description="ADAASDASD"
                ImageUrl="https://od2-image-api.abs-cbn.com/prod/editorImage/1746436948630050525_Paper%20Rex.jpg"
              />
            </div>
            <div className="pb-2">
              <NewsCard
                Title="PUBG"
                Description="ADAASDASD"
                ImageUrl="https://wstatic-prod-boc.krafton.com/common/news/20250504/80tgBPXe.jpg"
              />
            </div>
            <div className="pb-2">
              <NewsCard
                Title="Valorant"
                Description="ADAASDASD"
                ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
              />
            </div>
          </div>
        </div>

        <div className="hidden lg:grid lg:grid-cols-2 lg:gap-2 ">
          <div className="pl-4 row-span-2">
            <HeadNewsCard
              Title="DOTA 2"
              Description="awdawdaaswwa"
              ImageUrl="https://static.gosugamers.net/51/ee/b9/8e1b988745d3f49092838d35bf306c4878ffe13a257acd104ab522ead8.webp?w=1600"
            />
          </div>

          <div className="pr-4">
            <div className="pb-2">
              <NewsCard
                Title="Valorant"
                Description="ADAASDASD"
                ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
              />
            </div>
            <div className="pb-2">
              <NewsCard
                Title="Valorant"
                Description="ADAASDASD"
                ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
              />
            </div>
            <div className="pb-2">
              <NewsCard
                Title="Valorant"
                Description="ADAASDASD"
                ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
              />
            </div>
            <div className="pb-2">
              <NewsCard
                Title="Valorant"
                Description="ADAASDASD"
                ImageUrl="https://esportsinsider.com/wp-content/uploads/2025/05/edg-valorant-masters-toronto-failure-large.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HomePage;
