import articleService from "../../services/articleService/articleService.js";

const getAll = async (req, res, next) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const type = req.query.type || "";

    const result = await articleService.getAll({
      page: page,
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
