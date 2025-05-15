import matchResultService from "../../services/matchResultService/matchResultService.js";

const getMatchResults = async (req, res) => {
  const { page, limit, region } = req.query;

  try {
    const result = await matchResultService.getMatchResults({
      page: page || 1,
      limit: limit || 8,
      region: region || "",
    });
    res.status(200).json(result);
  } catch (error) {
    console.error("Error fetching match results:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export default {
  getMatchResults,
};
