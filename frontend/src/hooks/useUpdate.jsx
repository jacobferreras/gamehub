import axios from "axios";
import { useState, useEffect } from "react";
import { fetchUpdate } from "../services/fetchUpdate";

const useUpdate = (page, limit) => {
  const [updates, setUpdates] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getUpdate = async () => {
      try {
        const response = await fetchUpdate(page, limit);
        setUpdates(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching updates:", error);
        setUpdates([]);
      } finally {
        setLoading(false);
      }
    };

    getUpdate();
  }, [page, limit]);

  return {
    updates,
    totalPages,
    loading,
  };
};

export default useUpdate;
