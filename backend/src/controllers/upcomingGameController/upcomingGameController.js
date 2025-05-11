import upcomingGameService from "../../services/upcomingGameService/upcomingGameService.js";

const getAll = async (req, res) => {
  const { limit, game, random } = req.query;
  try {
    const result = await upcomingGameService.getAll({
      limit: limit || 10,
      game: game || "",
      random: random || false,
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
