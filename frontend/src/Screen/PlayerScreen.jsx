import { useState } from "react";
import Pagination from "../components/common/Pagination";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import NewsBg from "../assets/NewsBg.png";
import usePlayer from "../hooks/usePlayer";
// import Loader from "../components/common/Loader";
import CustomInputField from "../components/ui/CustomInputField";
import useDebounce from "../hooks/useDebounce";
// import useImagesLoaded from "../hooks/useImagesLoaded";

const PlayerScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");
  const [searchTouched, setSearchTouched] = useState(false);
  const debouncedSearch = useDebounce(search, 400);
  const limit = 12;
  const { players, totalPages, loading } = usePlayer(
    currentPage,
    limit,
    false,
    debouncedSearch
  );

  // const imageUrls = [
  //   NewsBg,
  //   ...(players ? players.map((player) => player.image) : []),
  // ];
  // const allLoaded = useImagesLoaded(imageUrls);

  // if (loading || !allLoaded) {
  //   return <Loader />;
  // }

  const noPlayersData = searchTouched && players.length === 0;

  return (
    <div
      className="min-h-screen"
      style={{
        backgroundImage: `url(${NewsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap justify-center lg:justify-end lg:flex-row lg:pr-10 pt-32 pb-4">
        <div className="w-64 lg:w-auto">
          <CustomInputField
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearchTouched(true);
              setCurrentPage(1);
            }}
            placeholder="Search Player"
            showIcon={true}
            setTouched
          />
        </div>
      </div>

      <div className="px-2 sm:px-4 md:px-8 3xl:px-10  pb-2 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4 gap-4 lg:gap-6">
        {noPlayersData ? (
          <div className="flex flex-col items-center justify-center min-h-[400px] text-white col-span-full">
            <p className="text-xl mb-4 font-bold">
              No data found for this player.
            </p>
          </div>
        ) : (
          players.map((player, index) => (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                ease: "easeOut",
                delay: index * 0.08,
              }}
              key={player.id || index}
              className="card bg-neutral-950 w-full shadow-sm flex flex-col"
            >
              <figure>
                <img
                  src={player.image}
                  alt={player.name}
                  className="w-full h-48 sm:h-56 md:h-64 object-cover rounded-t-lg"
                />
              </figure>
              <div className="card-body flex-1 flex flex-col justify-start items-start p-4">
                <h2 className="card-title text-lg font-semibold mb-1 truncate w-full text-white">
                  {player.ign}
                </h2>
                <p className="text-sm text-neutral-300 line-clamp-3">
                  {player.about}
                </p>
              </div>
              <div className="card-actions justify-start ml-4 mb-4">
                <Link to={`/app/players/ign/${encodeURIComponent(player.ign)}`}>
                  <motion.button
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.95 }}
                    className="btn bg-transparent text-white hover:text-blue-600 px-2 py-1 border rounded transition-colors"
                  >
                    View Profile
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))
        )}
      </div>
      <div className="flex justify-center py-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PlayerScreen;
