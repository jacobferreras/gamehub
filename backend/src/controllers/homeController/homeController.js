import homeService from "../../services/homeService/homeService.js";

const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 5;

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
