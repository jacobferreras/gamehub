import axios from "axios";
import { useState, useEffect } from "react";
import { fetchUpdate } from "../services/fetchUpdate";

const useUpdate = (page, limit) => {
  const [updates, setUpdates] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getUpdate = async () => {
      try {
        const response = await fetchUpdate(page, limit);
        setUpdates(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching updates:", error);
        setUpdates([]);
      }
    };

    getUpdate();
  }, [page, limit]);

  return {
    updates,
    totalPages,
  };
};

export default useUpdate;
