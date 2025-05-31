import axios from "axios";

export const fetchSchedule = async (
  page = 1,
  region = "",
  limit = "",
  game = ""
) => {
  const params = { page };
  if (region) params.region = region;
  if (limit) params.limit = limit;
  if (game) params.game = game;

  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/upcomingGames`,
    {
      params,
    }
  );
  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
