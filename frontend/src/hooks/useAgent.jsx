import { useState, useEffect } from "react";
import { fetchAgent } from "../services/fetchAgent";

const useAgent = (limit, page, role, search) => {
  const [agents, setAgents] = useState([]);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const [filteredAgents, setFilteredAgents] = useState([]);

  useEffect(() => {
    setLoading(true);
    const getAgents = async () => {
      try {
        const response = await fetchAgent(100, 1);
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents:", error);
        setAgents([]);
      } finally {
        setLoading(false);
      }
    };
    getAgents();
  }, []);

  useEffect(() => {
    const filterAgents = () => {
      let filtered = agents;

      if (role) {
        filtered = filtered.filter((agent) => agent.role === role);
      }

      if (search) {
        const searchLower = search.toLowerCase();
        filtered = filtered.filter((agent) =>
          agent.name.toLowerCase().includes(searchLower)
        );
      }

      setTotalPages(Math.ceil(filtered.length / limit) || 1);

      const startIndex = (page - 1) * limit;
      const paginatedResults = filtered.slice(startIndex, startIndex + limit);

      setFilteredAgents(paginatedResults);
    };

    filterAgents();
  }, [agents, page, role, search]);

  return { agents: filteredAgents, totalPages, loading };
};

export default useAgent;
