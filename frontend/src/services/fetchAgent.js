import axios from "axios";

export const fetchAgent = async (
  limit = 12,
  page = 1,
  role = "",
  search = ""
) => {
  const params = { limit, page };
  if (role) params.role = role;
  if (search) params.search = search;

  const response = await axios.get("http://localhost:5000/agents", { params });

  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
