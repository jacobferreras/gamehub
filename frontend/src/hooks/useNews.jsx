import { useState } from "react";
import { useEffect } from "react";
import { fetchNews } from "../services/fetchNews"; // Assuming you have a service to fetch news

const useNews = (page, limit) => {
  const [news, setNews] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getNews = async () => {
      try {
        const response = await fetchNews(page, limit);
        setNews(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews([]);
      }
    };
    getNews();
  }, [page, limit]);

  return {
    news,
    totalPages,
  };
};

export default useNews;
