import React from "react";
import { useEffect, useState } from "react";
import axios from "axios";
import Pagination from "../components/common/Pagination";
import { Link } from "react-router-dom";

const PlayerScreen = () => {
  const [players, setPlayers] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const limit = 12;

  useEffect(() => {
    const fetchPlayers = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/proplayers?page=${currentPage}&limit=${limit}&random`
        );
        setPlayers(Array.isArray(response.data.data) ? response.data.data : []);
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching players:", error);
        setPlayers([]);
      }
    };

    fetchPlayers();
  }, [currentPage, limit]);
  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="px-8 pt-32 pb-2 gap-4  md:px-4 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-10">
        {players.map((player, index) => (
          <Link
            to={`/app/players/ign/${encodeURIComponent(player.ign)}`}
            className="card bg-neutral-950 w-[100%] shadow-sm"
            key={player.id || index}
          >
            <figure>
              <img
                src={player.image}
                alt={player.name}
                className="w-full h-58 object-fit"
              />
            </figure>
            <div className="card-body flex justity-start items-start">
              <h2 className="card-title">{player.ign}</h2>
              <p>{player.about}</p>
            </div>
          </Link>
        ))}
      </div>
      <div className="flex justify-center py-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default PlayerScreen;
