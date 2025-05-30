import { useState, useEffect } from "react";
import { fetchPlayer } from "../services/fetchPlayer";

const usePlayer = (page, limit, random, search) => {
  const [players, setPlayers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const getPlayers = async () => {
      try {
        const response = await fetchPlayer(page, limit, random, search);
        setPlayers(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching players:", error);
        setPlayers([]);
      }
    };

    getPlayers();
  }, [page, limit, random, search]);

  return { players, totalPages };
};

export default usePlayer;
