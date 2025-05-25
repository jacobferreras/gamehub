import axios from "axios";

export const fetchHomeGameSchedule = async (limit = 4, game = "valorant") => {
  try {
    const response = await axios.get(
      `http://localhost:5000/upcomingGames?limit=${limit}&game=${game}`
    );
    return Array.isArray(response.data.data) ? response.data.data : [];
  } catch (error) {
    console.error("Error fetching game schedules:", error);
    return [];
  }
};

export const fetchMatchScreenSchedule = async (
  page = 1,
  region = "",
  limit = 8
) => {
  const params = { page, limit };
  if (region) params.region = region;

  const response = await axios.get("http://localhost:5000/upcomingGames", {
    params,
  });
  return {
    data: Array.isArray(response.data.data) ? response.data.data : [],
    totalPages: response.data.totalPages || 1,
  };
};
