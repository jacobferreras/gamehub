import { useState, useEffect } from "react";
import { fetchPlayer } from "../services/fetchPlayer";

const usePlayer = (page, limit, random, search) => {
  const [allPlayers, setAllPlayers] = useState([]);
  const [filteredPlayers, setFilteredPlayers] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getPlayers = async () => {
      try {
        const response = await fetchPlayer(1, 1000, random);
        setAllPlayers(response.data);
      } catch (error) {
        console.error("Error fetching players:", error);
        setAllPlayers([]);
      } finally {
        setLoading(false);
      }
    };

    getPlayers();
  }, [random]);

  useEffect(() => {
    const filterPlayers = () => {
      let filtered = allPlayers;

      if (search) {
        const searchLower = search.toLowerCase();
        filtered = allPlayers.filter(
          (player) =>
            (player.name && player.name.toLowerCase().includes(searchLower)) ||
            (player.ign && player.ign.toLowerCase().includes(searchLower)) ||
            (player.team && player.team.toLowerCase().includes(searchLower))
        );
      }

      setTotalPages(Math.ceil(filtered.length / limit) || 1);

      const startIndex = (page - 1) * limit;
      const paginatedResults = filtered.slice(startIndex, startIndex + limit);

      setFilteredPlayers(paginatedResults);
    };

    filterPlayers();
  }, [allPlayers, search, page, limit]);

  return { players: filteredPlayers, totalPages, loading };
};

export default usePlayer;
