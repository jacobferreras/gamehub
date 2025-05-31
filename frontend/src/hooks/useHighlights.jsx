import { useState, useEffect } from "react";
import { fetchHighlights } from "../services/fetchHighlights";

const useHighlights = (page, limit) => {
  const [highlights, setHighlights] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  const pageVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

  useEffect(() => {
    setLoading(true);
    const getHighlights = async () => {
      try {
        const response = await fetchHighlights(page, limit);
        setHighlights(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching highlights:", error);
        setHighlights([]);
      } finally {
        setLoading(false);
      }
    };

    getHighlights();
  }, [page, limit]);

  return { highlights, totalPages, loading, pageVariants };
};

export default useHighlights;
