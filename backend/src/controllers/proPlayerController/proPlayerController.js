import homeService from "../../services/proPlayerService/proPlayerService.js";

const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const game = req.query.game || "";
    const random = req.query.random || false;

    const result = await homeService.getAll({
      limit: limit,
      game: game,
      random: random,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
};
