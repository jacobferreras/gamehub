import axios from "axios";

export const fetchAgentDetails = async (agentId) => {
  const response = await axios.get(`http://localhost:5000/agents/${agentId}`);

  return {
    data: response.data.data,
  };
};
