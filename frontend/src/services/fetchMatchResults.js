import axios from "axios";

export const fetchMatchResults = async (page = 1, region = "", limit = "") => {
  const params = { page };
  if (region) params.region = region;
  if (limit) params.limit = limit;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/matchResults`,
    {
      params,
    }
  );

  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
