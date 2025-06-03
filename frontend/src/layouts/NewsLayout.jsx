import { Outlet } from "react-router-dom";
import NewsBg from "../assets/NewsBg.png";
import { motion } from "framer-motion";
import NewsNavigation from "../components/common/NewsNavigation";
import useImagesLoaded from "../hooks/useImagesLoaded";
import Loader from "../components/common/Loader";

const NewsLayout = () => {
  const allLoaded = useImagesLoaded([NewsBg]);

  if (!allLoaded) {
    return <Loader />;
  }

  return (
    <>
      <motion.div
        className="flex flex-col min-h-screen"
        style={{
          backgroundImage: `url(${NewsBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
        loading="lazy"
      >
        <NewsNavigation />
        <Outlet />
      </motion.div>
    </>
  );
};

export default NewsLayout;
