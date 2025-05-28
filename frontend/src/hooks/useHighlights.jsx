import { useState, useEffect } from "react";
import { fetchHighlights } from "../services/fetchHighlights";

const useHighlights = (page, limit) => {
  const [highlights, setHighlights] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getHighlights = async () => {
      try {
        const response = await fetchHighlights(page, limit);
        setHighlights(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching highlights:", error);
        setHighlights([]);
      }
    };

    getHighlights();
  }, [page, limit]);

  return { highlights, totalPages };
};

export default useHighlights;
