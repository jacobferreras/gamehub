import axios from "axios";

export const fetchPlayer = async (page = 1, limit = "", random = "") => {
  const params = { page };
  if (limit) params.limit = limit;
  if (random) params.random = random;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/proplayers`,
    {
      params,
    }
  );

  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
