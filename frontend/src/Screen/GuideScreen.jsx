import { useState, useEffect } from "react";
import axios from "axios";
import AgentFilter from "../components/ui/AgentFilter";

const GuideScreen = () => {
  const [agents, setAgents] = useState([]);
  const [role, setRole] = useState("");

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/agents?role=${role}`
        );
        setAgents(Array.isArray(response.data.data) ? response.data.data : []);
      } catch (error) {
        console.error("Error fetching agents:", error);
        setAgents([]);
      }
    };

    fetchAgents();
  }, [role]);

  return (
    <div className="min-h-screen bg-neutral-950 pt-20">
      <AgentFilter value={role} onChange={(e) => setRole(e.target.value)} />
      <div className="px-8 pt-2 pb-2 gap-4 md:px-4 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-10">
        {agents.map((agent, index) => (
          <div
            key={agent.id || index}
            className="card bg-base-100 image-fit w-auto lg:w-full shadow-sm relative group overflow-hidden"
          >
            <figure className="relative">
              <img
                src={agent.small_image}
                alt="Shoes"
                className="w-full h-64 object-cover rounded-md"
              />
              <div className="absolute inset-0 bg-black opacity-20 group-hover:opacity-70 transition-opacity duration-200 rounded-md"></div>
            </figure>

            <div className="absolute bottom-0 w-full z-10 px-2 pointer-events-none">
              <div className="transition-all duration-500 ease-in-out delay-100">
                <div className="max-h-0  overflow-hidden transition-all duration-500 ease-in-out delay-100 group-hover:max-h-32 group-hover:pb-4 group-hover:opacity-100">
                  <div className="flex flex-row gap-x-2">
                    <img
                      src={agent.role_image}
                      alt=""
                      className="h-[50px] w-[50px]"
                    />
                    <h2 className="card-title text-5xl text-white">
                      {agent.name}
                    </h2>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default GuideScreen;
