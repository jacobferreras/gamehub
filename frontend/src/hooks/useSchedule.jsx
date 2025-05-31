import { useState, useEffect } from "react";
import { fetchSchedule } from "../services/fetchSchedule";

const useSchedule = (page, region, limit) => {
  const [schedules, setSchedules] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getSchedules = async () => {
      try {
        const response = await fetchSchedule(page, region, limit);
        setSchedules(response.data);
        setTotalPages(response.totalPages);
        setMessage(response.message);
      } catch (error) {
        console.error("Error fetching schedules:", error);
        setSchedules([]);
        setTotalPages(0);
        setMessage("Error fetching schedules.");
      } finally {
        setLoading(false);
      }
    };

    getSchedules();
  }, [page, region, limit]);

  return {
    schedules,
    totalPages,
    message,
    loading,
  };
};

export default useSchedule;
