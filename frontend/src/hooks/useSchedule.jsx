import axios from "axios";
import { useState, useEffect } from "react";
import { fetchMatchResults } from "../services/fetchMatchResults";

const useSchedule = (page, region, limit) => {
  const [schedules, setSchedules] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const response = await fetchMatchResults(page, region, limit);
        setSchedules(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching schedules:", error);
        setSchedules([]);
      }
    };

    getSchedules();
  }, []);

  return {
    schedules,
    totalPages,
  };
};

export default useSchedule;
