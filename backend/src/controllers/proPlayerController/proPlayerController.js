import proplayerService from "../../services/proPlayerService/proPlayerService.js";

const getAll = async (req, res, next) => {
  try {
    const limit = req.query.limit || 10;
    const random = req.query.random || false;
    const page = req.query.page || 1;
    const search = req.query.search || "";

    const result = await proplayerService.getAll({
      limit: limit,
      random: random,
      page: page,
      search: search,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getProPlayerById = async (req, res, next) => {
  const { id } = req.params;

  try {
    const result = await proplayerService.getProPlayerById(id);

    if (result.data === null) {
      return res.status(404).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getProPlayerByIGN = async (req, res, next) => {
  const { ign } = req.params;

  try {
    const result = await proplayerService.getProPlayerByIGN(ign);

    if (result.data === null) {
      return res.status(404).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getAll,
  getProPlayerById,
  getProPlayerByIGN,
};
