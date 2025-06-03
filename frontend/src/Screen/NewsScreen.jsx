import { useState, useEffect } from "react";
import Pagination from "../components/common/Pagination";
import { motion } from "framer-motion";
import useNews from "../hooks/useNews";
import Loader from "../components/common/Loader";
import useImagesLoaded from "../hooks/useImagesLoaded";

const NewsScreen = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const limit = 12;
  const { news, totalPages, loading } = useNews(currentPage, limit);

  const imageUrls = news ? news.map((article) => article.image) : [];
  const allLoaded = useImagesLoaded(imageUrls);

  if (loading || !allLoaded) {
    return <Loader />;
  }

  return (
    <div>
      <div>
        <div className="flex-grow">
          <div className="px-8 pt-2 pb-2 gap-4 md:px-4 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-10">
            {news.map((article, index) => (
              <motion.a
                href={article.article_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.5,
                  ease: "easeOut",
                  delay: index * 0.08,
                }}
                key={article.id || index}
                className="card bg-base-100 image-fit w-auto lg:w-full shadow-sm relative group overflow-hidden"
              >
                <figure className="relative">
                  <img
                    loading="lazy"
                    src={article.image}
                    alt="Shoes"
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-200 rounded-md"></div>
                </figure>

                <div className="absolute bottom-0 w-full z-10 px-2 pointer-events-none">
                  <div className="transition-all duration-500 ease-in-out delay-100">
                    <h1 className="text-xs text-white">{article.date}</h1>
                    <h2 className="card-title font-heading text-xl text-white">
                      {article.title}
                    </h2>
                    <div className="max-h-0 opacity-0 overflow-hidden transition-all duration-500 ease-in-out delay-100 group-hover:max-h-32 group-hover:pb-4 group-hover:opacity-100">
                      <p className="text-sm text-white">by: {article.author}</p>
                      <p className="text-sm text-white">
                        {article.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.a>
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

export default NewsScreen;
