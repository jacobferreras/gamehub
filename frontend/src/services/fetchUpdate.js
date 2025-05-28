import axios from "axios";

export const fetchUpdate = async (page = 1, limit = "") => {
  const params = { page };
  if (limit) params.limit = limit;

  const response = await axios.get("http://localhost:5000/updates", {
    params,
  });

  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
