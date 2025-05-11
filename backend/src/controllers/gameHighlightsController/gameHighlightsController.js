import gameHighlightsService from "../../services/gameHighlightsService/gameHighlightsService.js";

const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const game = req.query.game || "";

    const result = await gameHighlightsService.getAll({
      limit: limit,
      game: game,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
};
