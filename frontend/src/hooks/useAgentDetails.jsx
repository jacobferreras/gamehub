import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchAgentDetails } from "../services/fetchAgentDetails";

const useAgentDetails = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const getAgentDetails = async () => {
      try {
        const response = await fetchAgentDetails(id);
        setAgent(response.data);
      } catch (error) {
        console.error("Error fetching agent details:", error);
        setAgent(null);
      } finally {
        setLoading(false);
      }
    };
    getAgentDetails();
  }, [id]);

  if (!agent) {
    return (
      <div className="min-h-screen bg-neutral-950 pt-20">
        <div>Loading...</div>
      </div>
    );
  }

  const skillData = [
    {
      logo: agent.skill1_logo,
      name: agent.skill1,
      description: agent.skill1_description,
      video: agent.skill1_video,
    },
    {
      logo: agent.skill2_logo,
      name: agent.skill2,
      description: agent.skill2_description,
      video: agent.skill2_video,
    },
    {
      logo: agent.skill3_logo,
      name: agent.skill3,
      description: agent.skill3_description,
      video: agent.skill3_video,
    },
    {
      logo: agent.skill4_logo,
      name: agent.skill4,
      description: agent.skill4_description,
      video: agent.skill4_video,
    },
  ];

  const pageVariants = {
    initial: { opacity: 0, y: 40 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 40 },
  };

  return { agent, skillData, pageVariants, loading };
};

export default useAgentDetails;
