import upcomingGameService from "../../services/upcomingGameService/upcomingGameService.js";

const getAll = async (req, res) => {
  const { page, limit, game, random, region } = req.query;
  try {
    const result = await upcomingGameService.getAll({
      page: page || 1,
      limit: limit || 8,
      game: game || "",
      random: random || false,
      region: region || "",
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching upcoming games",
      error: error.message,
    });
  }
};

export default {
  getAll,
};
