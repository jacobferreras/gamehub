import pubgScheduleService from "../../services/pubgScheduleService/pubgScheduleService.js";

const getPubgSchedule = async (req, res) => {
  const { limit, region } = req.query;
  try {
    const result = await pubgScheduleService.getPubgSchedule({
      limit: limit || 10,
      region: region || "",
    });
    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching PUBG schedule",
      error: error.message,
    });
  }
};

export default {
  getPubgSchedule,
};
