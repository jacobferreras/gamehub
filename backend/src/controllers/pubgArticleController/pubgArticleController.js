import pubgArticleService from "../../services/pubgArticleService/pubgArticleService.js";

const getPubgArticles = async (req, res) => {
  const { limit, type } = req.query;
  try {
    const result = await pubgArticleService.getPubgArticles({
      limit,
      type,
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export default {
  getPubgArticles,
};
