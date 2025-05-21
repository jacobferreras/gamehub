import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BackArrow from "../assets/back_arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const PlayerDetailScreen = () => {
  const { ign } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/proplayers/ign/${ign}`
        );
        setPlayer(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };

    fetchPlayerDetails();
  }, [ign]);

  if (!player) {
    return (
      <div className="min-h-screen bg-neutral-950 pt-20">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-neutral-950">
      <div className="flex justify-center items-center pt-20">
        <img src={player.image} alt="" />
      </div>
    </div>
  );
};

export default PlayerDetailScreen;
