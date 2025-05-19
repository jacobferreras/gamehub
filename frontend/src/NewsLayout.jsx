import React from "react";
import NewsNavigation from "./components/common/NewsNavigation";
import { Outlet } from "react-router-dom";
import NewsBg from "./assets/NewsBg.png";
import { motion } from "framer-motion";

const NewsLayout = () => {
  const pageVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };
  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${NewsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NewsNavigation />
        <Outlet />
      </motion.div>
    </>
  );
};

export default NewsLayout;
