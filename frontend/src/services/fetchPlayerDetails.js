import axios from "axios";

export const fetchPlayerDetails = async (PlayerIgn) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/proplayers/ign/${PlayerIgn}`
  );

  return {
    data: response.data.data,
  };
};
