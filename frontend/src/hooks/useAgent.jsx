import { useState, useEffect } from "react";
import { fetchAgent } from "../services/fetchAgent";

const useAgent = (limit, page, role, search) => {
  const [agents, setAgents] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getAgents = async () => {
      try {
        const response = await fetchAgent(limit, page, role, search);
        setAgents(response.data);
        setTotalPages(response.totalPages);
      } catch (error) {
        console.error("Error fetching agents:", error);
        setAgents([]);
      } finally {
        setLoading(false);
      }
    };
    getAgents();
  }, [limit, page, role, search]);

  return { agents, totalPages, loading };
};

export default useAgent;
