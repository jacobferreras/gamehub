import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/common/Pagination";
import { motion } from "framer-motion";

const UpdateScreen = () => {
  const [updates, setUpdates] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchUpdate = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/updates?page=${currentPage}&limit=${limit}`
        );
        setUpdates(Array.isArray(response.data.data) ? response.data.data : []);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching updates:", error);
        setUpdates([]);
      }
    };

    fetchUpdate();
  }, [currentPage, limit]);

  return (
    <div>
      <div>
        <div className="flex-grow">
          <div className="px-8 pt-2 pb-2 gap-4 md:px-4 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-10">
            {updates.map((update, index) => (
              <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                key={update.id || index}
                className="card bg-base-100 image-fit w-auto lg:w-full shadow-sm relative group overflow-hidden"
              >
                <figure className="relative">
                  <img
                    src={update.image}
                    alt="Shoes"
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-200 rounded-md"></div>
                </figure>

                <div className="absolute bottom-0 w-full z-10 px-2 pointer-events-none">
                  <div className="transition-all duration-500 ease-in-out delay-100">
                    <h1 className="text-xs text-white">{update.date}</h1>
                    <h2 className="card-title text-xl text-white">
                      {update.title}
                    </h2>
                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out delay-100 group-hover:max-h-32 group-hover:opacity-100">
                      <p className="text-sm text-white"></p>
                      <p className="text-sm text-white">{update.description}</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="flex justify-center py-4">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </div>
  );
};

export default UpdateScreen;
