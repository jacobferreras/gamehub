import axios from "axios";

export const fetchAgentDetails = async (agentId) => {
  const response = await axios.get(
    `${import.meta.env.VITE_API_URL}/agents/${agentId}`
  );

  return {
    data: response.data.data,
  };
};
