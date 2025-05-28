import { useState } from "react";
import NewsBg from "../assets/NewsBg.png";
import Pagination from "../components/common/Pagination";
import { motion } from "framer-motion";
import useHighlights from "../hooks/useHighlights"; // Adjust the import path as necessary

const HighlightScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 8;
  const { highlights, totalPages } = useHighlights(currentPage, limit);

  const pageVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

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
      <div className="px-2 pt-32 pb-2 gap-4 md:px-4 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-10">
        {highlights.map((highlight, index) => (
          <motion.div
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="card bg-neutral-950 w-[100%] shadow-sm"
            key={highlight.id || index}
          >
            <figure>
              <iframe
                width="100%"
                height="100%"
                src={highlight.video_url}
                title={highlight.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="rounded-lg min-h-[200px] lg:min-h-[250px] 3xl:min-h-[350px] "
              ></iframe>
            </figure>
            <div className="card-body flex flex-col items-start">
              <h2 className="card-title">{highlight.title}</h2>
              <div className="badge badge-outline">{highlight.author}</div>

              <div className="card-actions justify-end">
                <motion.button
                  whileHover={{ scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn bg-transparent hover:text-blue-600 "
                >
                  <a
                    href={highlight.channel}
                    target="blank"
                    rel="noopener noreferrer"
                  >
                    View Channel
                  </a>
                </motion.button>
              </div>
            </div>
          </motion.div>
        ))}
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

export default HighlightScreen;
