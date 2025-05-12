import dotaArticleService from "../../services/dotaArticleService/dotaArticleService.js";

const getDotaArticles = async (req, res) => {
  try {
    const { limit, type } = req.query;
    const result = await dotaArticleService.getDotaArticles({
      limit: limit || 10,
      type: type || "",
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  getDotaArticles,
};
