import axios from "axios";

export const fetchAgent = async (limit = 12, page = 1) => {
  const params = { limit, page };

  const response = await axios.get(`${import.meta.env.VITE_API_URL}/agents`, {
    params,
  });

  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
