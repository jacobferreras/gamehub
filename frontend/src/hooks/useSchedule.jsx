import { useState, useEffect } from "react";
import { fetchSchedule } from "../services/fetchSchedule";

const useSchedule = (page, region, limit) => {
  const [schedules, setSchedules] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getSchedules = async () => {
      try {
        const response = await fetchSchedule(page, region, limit);
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
