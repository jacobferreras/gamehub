import axios from "axios";

const fetchPlayer = async (limit = 10, random = true) => {
  try {
    const response = await axios.get(
      `http://localhost:5000/proplayers?limit=${limit}&random=${random}`
    );
    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error("Error fetching player data:", error);
    return [];
  }
};

export default fetchPlayer;
