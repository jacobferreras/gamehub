import axios from "axios";

export const fetchHighlights = async (page = 1, limit = "", random = "") => {
  const params = { page };
  if (limit) params.limit = limit;
  if (random) params.random = random;

  const response = await axios.get("http://localhost:5000/gameHighlights", {
    params,
  });

  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
