import { useState } from "react";
import { motion } from "framer-motion";
import Pagination from "../components/common/Pagination";
import DropdownInputField from "../components/ui/DropdownInputField";
import GameBg from "../assets/GameBg.png";
import useMatchResult from "../hooks/useMatchResult";
import Loader from "../components/common/Loader";
import useImagesLoaded from "../hooks/useImagesLoaded";

const MatchResultScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [region, setRegion] = useState("");
  const [regionTouched, setRegionTouched] = useState(false);
  const limit = 8;
  const { schedules, totalPages, message, loading } = useMatchResult(
    currentPage,
    region,
    limit
  );

  const imageUrls = [
    GameBg,
    ...(schedules ? schedules.flatMap((s) => [s.logo1, s.logo2]) : []),
  ];

  const allLoaded = useImagesLoaded(imageUrls);

  if (loading || !allLoaded) {
    return <Loader />;
  }

  return (
    <div
      className=" flex flex-col min-h-screen pt-28"
      style={{
        backgroundImage: `url(${GameBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      loading="lazy"
    >
      <div className="flex justify-end gap-3 pb-10 px-12 lg:pr-30 ">
        <DropdownInputField
          value={region}
          onChange={(e) => {
            setRegion(e.target.value);
            setRegionTouched(true);
            setCurrentPage(1);
          }}
        />
      </div>
      <div className="flex-grow">
        {regionTouched && schedules && schedules.length === 0 ? (
          <div className="flex  items-center justify-center min-h-[400px] text-white">
            <p className="text-xl mb-4 font-bold">
              {message || "No match results found for the selected region."}
            </p>
          </div>
        ) : (
          <div className="px-4 pb-2 gap-4 md:px-4 md:gap-y-0 lg:gap-x-2 lg:gap-y-0 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-34">
            {schedules &&
              schedules.map((schedule, index) => (
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.5,
                    ease: "easeOut",
                    delay: index * 0.08,
                  }}
                  key={schedule.id || index}
                  className="card bg-zinc-800 w-auto lg:w-auto 3xl:w-auto shadow-xl text-center text-white items-center mb-5"
                >
                  <h2 className="card-title font-heading mt-2 text-lg px-2">
                    {schedule.match_event}
                  </h2>
                  <div className="card-body items-center text-center min-h-64 flex flex-col justify-center ">
                    <div className="flex w-full">
                      <div className="flex flex-col items-center w-1/3">
                        <img
                          loading="lazy"
                          src={schedule.logo1}
                          alt={schedule.team1}
                          className="team-logo w-20 h-20 object-contain"
                        />
                        <p className="team-name text-sm mt-2">
                          {schedule.team1}
                        </p>
                      </div>

                      <div className="flex flex-col items-center justify-center w-1/3 mx-10">
                        <h1 className="font-bold texl-3xl">Final</h1>
                        <div className="flex flex-row gap-4">
                          <h1
                            className={
                              schedule.score1 > schedule.score2
                                ? "text-3xl text-green-500"
                                : schedule.score1 < schedule.score2
                                  ? "text-3xl text-red-500"
                                  : "text-3xl text-yellow-500"
                            }
                          >
                            {schedule.score1}
                          </h1>
                          <h1 className="text-3xl">:</h1>
                          <h1
                            className={
                              schedule.score2 > schedule.score1
                                ? "text-3xl text-green-500"
                                : schedule.score2 < schedule.score1
                                  ? "text-3xl text-red-500"
                                  : "text-3xl text-yellow-500"
                            }
                          >
                            {schedule.score2}
                          </h1>
                        </div>
                      </div>

                      <div className="flex flex-col items-center w-1/3">
                        <img
                          loading="lazy"
                          src={schedule.logo2}
                          alt={schedule.team2}
                          className="team-logo w-20 h-20 object-contain"
                        />
                        <p className="team-name text-sm mt-2">
                          {schedule.team2}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        )}
      </div>

      <div className="flex justify-center mb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default MatchResultScreen;
