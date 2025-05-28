import { useState, useEffect, use } from "react";
import { fetchMatchResults } from "../services/fetchMatchResults"; // Adjust the import path as necessary

const useMatchResult = (page, region, limit) => {
  const [schedules, setSchedules] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getMatchResults = async () => {
      try {
        const response = await fetchMatchResults(page, region, limit);
        setSchedules(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching match results:", error);
        setSchedules([]);
      }
    };

    getMatchResults();
  }, [page, region, limit]);

  return {
    schedules,
    totalPages,
  };
};

export default useMatchResult;
