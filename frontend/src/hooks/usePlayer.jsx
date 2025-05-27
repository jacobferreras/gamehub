import { useState, useEffect } from "react";
import { fetchPlayer } from "../services/fetchPlayer";

const usePlayer = (page, limit, random) => {
  const [players, setPlayers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetchPlayer(page, limit, random);
        setPlayers(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching players:", error);
        setPlayers([]);
      }
    };

    getPlayers();
  }, [page, limit]);

  return { players, totalPages };
};

export default usePlayer;
