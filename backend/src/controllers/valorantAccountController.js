import valorantaAccountService from "../services/valorantaAccountService.js";

const getValorantAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Valorant account id is required" });
    }
    const result = await valorantaAccountService.getValorantAccountById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const getAllValorantAccounts = async (req, res, next) => {
  try {
    const limit = req.query.limit || 5;
    const page = req.query.page || 1;
    const result = await valorantaAccountService.getAllValorantAccounts({
      limit: limit,
      page: page,
    });
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const addValorantAccountById = async (req, res, next) => {
  try {
    const account = req.body;
    if (!account) {
      return res.status(400).json({ message: "Valorant account is required" });
    }

    const result = await valorantaAccountService.addValorantAccountById(
      account
    );
    res.status(201).json(result);
  } catch (error) {
    next(error);
  }
};

const updateValorantAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Valorant account id is required" });
    }
    const data = req.body;
    if (!data) {
      return res.status(400).json({ message: "Valorant account is required" });
    }
    const result = await valorantaAccountService.updateValorantAccountById(
      id,
      data
    );
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

const deleteValorantAccountById = async (req, res, next) => {
  try {
    const { id } = req.params;
    if (!id) {
      return res
        .status(400)
        .json({ message: "Valorant account id is required" });
    }
    const result = await valorantaAccountService.deleteValorantAccountById(id);
    res.status(200).json(result);
  } catch (error) {
    next(error);
  }
};

export default {
  getValorantAccountById,
  getAllValorantAccounts,
  addValorantAccountById,
  updateValorantAccountById,
  deleteValorantAccountById,
};
