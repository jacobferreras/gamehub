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
        {/* <div className="border-t border-gray-600 opacity-2"></div> */}
        <Outlet />
      </div>
    </>
  );
};

export default NewsLayout;
