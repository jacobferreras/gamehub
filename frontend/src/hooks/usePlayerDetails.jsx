import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchPlayerDetails } from "../services/fetchPlayerDetails";

const usePlayerDetails = () => {
  const { ign } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const getPlayerDetails = async () => {
      try {
        const response = await fetchPlayerDetails(ign);
        setPlayer(response.data);
      } catch (error) {
        console.error("Error fetching player details:", error);
        setPlayer(null);
      }
    };
    getPlayerDetails();
  }, [ign]);

  if (!player) {
    return (
      <div className="min-h-screen bg-neutral-950 pt-20">
        <div>Loading...</div>
      </div>
    );
  }

  return { player };
};

export default usePlayerDetails;
