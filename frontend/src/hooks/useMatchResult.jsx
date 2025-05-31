import { useState, useEffect, use } from "react";
import { fetchMatchResults } from "../services/fetchMatchResults"; // Adjust the import path as necessary

const useMatchResult = (page, region, limit) => {
  const [schedules, setSchedules] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getMatchResults = async () => {
      try {
        const response = await fetchMatchResults(page, region, limit);
        setSchedules(response.data);
        setTotalPages(response.totalPages);
        setMessage(response.message);
      } catch (error) {
        console.error("Error fetching match results:", error);
        setSchedules([]);
        setTotalPages(0);
        setMessage("Error fetching schedules.");
      } finally {
        setLoading(false);
      }
    };

    getMatchResults();
  }, [page, region, limit]);

  return {
    schedules,
    totalPages,
    message,
    loading,
  };
};

export default useMatchResult;
