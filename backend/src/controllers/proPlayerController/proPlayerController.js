import homeService from "../../services/proPlayerService/proPlayerService.js";

const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const game = req.query.game || "";

    const result = await homeService.getAll({
      limit: limit,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
};
