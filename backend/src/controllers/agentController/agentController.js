import agentService from "../../services/agentService/agentSerive.js";

const getAllAgents = async (req, res) => {
  try {
    const page = req.query.page || 1;
    const limit = req.query.limit || 10;
    const role = req.query.role || "";
    const search = req.query.search || "";

    const result = await agentService.getAllAgents({
      page: page,
      limit: limit,
      role: role,
      search: search,
    });

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching agents",
      error: error.message,
    });
  }
};

const getAgentById = async (req, res) => {
  const { id } = req.params;

  try {
    const result = await agentService.getAgentById(id);

    if (result.data === null) {
      return res.status(404).json(result);
    }

    return res.status(200).json(result);
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching agent",
      error: error.message,
    });
  }
};

export default {
  getAllAgents,
  getAgentById,
};
