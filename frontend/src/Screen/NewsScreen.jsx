import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/common/Pagination";

const NewsScreen = () => {
  const [news, setNews] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await axios.get(`
          http://localhost:5000/articles?page=${currentPage}&limit=${limit}`);
        setNews(Array.isArray(response.data.data) ? response.data.data : []);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      }
    };

    fetchNews();
  }, [currentPage, limit]);

  return (
    <div className="bg-neutral-950 min-h-screen ">
      <div className="px-8 pt-40 pb-2 gap-4 md:px-4 md:gap-y-4 lg:gap-x-2 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-34">
        {news.map((article, index) => (
          <div
            key={article.id || index}
            className="card bg-base-100 image-full w-auto lg:w-full shadow-sm relative group overflow-hidden"
          >
            <figure className="relative">
              <img
                src={article.image}
                alt="Shoes"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black opacity-60 group-hover:opacity-70 transition-opacity duration-200 rounded-md"></div>
            </figure>

            <div className="absolute bottom-0 w-full z-10 px-2 pointer-events-none">
              <div className="transition-all duration-300 transform group-hover:-translate-y-12">
                <h1 className="text-xs text-white">{article.date}</h1>
                <h2 className="card-title text-lg text-white">
                  {article.title}
                </h2>
              </div>
              <div className="opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 text-white -mt-12">
                {/* -mt-3 reduces the gap */}
                <p className="text-sm">by: {article.author}</p>
                <p className="text-sm">{article.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsScreen;
