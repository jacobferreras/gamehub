import axios from "axios";

export const fetchPlayerDetails = async (PlayerIgn) => {
  const response = await axios.get(
    `http://localhost:5000/proplayers/ign/${PlayerIgn}`
  );

  return {
    data: response.data.data,
  };
};
