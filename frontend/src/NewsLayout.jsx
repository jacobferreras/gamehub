import React from "react";
import NewsNavigation from "./components/common/NewsNavigation";
import { Outlet } from "react-router-dom";
import NewsBg from "./assets/NewsBg.png";

const NewsLayout = () => {
  return (
    <>
      <div
        className="min-h-screen"
        style={{
          backgroundImage: `url(${NewsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <NewsNavigation />
        <Outlet />
      </div>
    </>
  );
};

export default NewsLayout;
