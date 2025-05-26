import axios from "axios";

export const fetchSchedule = async (
  page = 1,
  region = "",
  limit = "",
  game = "valorant"
) => {
  const params = { page, game };
  if (region) params.region = region;
  if (limit) params.limit = limit;

  const response = await axios.get("http://localhost:5000/upcomingGames", {
    params,
  });
  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
