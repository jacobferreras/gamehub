import articleService from "../../services/articleService/articleService";

const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const type = req.query.game || "";

    const result = await articleService.getAll({
      limit: limit,
      type: type,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
};
