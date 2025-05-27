import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import AgentFilter from "../components/ui/AgentFilter";
import CustomInputField from "../components/ui/CustomInputField";
import { motion } from "framer-motion";
import Pagination from "../components/common/Pagination";
import useDebounce from "../hooks/useDebounde";
import useAgent from "../hooks/useAgent";

const AgentScreen = () => {
  const [role, setRole] = useState("");
  const [search, setSearch] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const debouncedSearch = useDebounce(search, 400);
  const { agents, totalPages } = useAgent(
    12,
    currentPage,
    role,
    debouncedSearch
  );

  return (
    <motion.div
      className="min-h-screen  pt-20"
      style={{
        backgroundImage: `url("http://localhost:5000/uploads/bg.png")`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="flex flex-wrap justify-center lg:justify-end lg:flex-row lg:pr-10 ">
        <AgentFilter value={role} onChange={(e) => setRole(e.target.value)} />
        <div className="w-64 lg:w-auto">
          <CustomInputField
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
      </div>

      <div className="px-8 pt-2 pb-2 gap-4 md:px-4 md:gap-y-4 lg:gap-x-4 lg:gap-y-4 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-10">
        {agents.map((agent, index) => (
          <motion.div
            key={agent.id || index}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut", delay: index * 0.08 }}
          >
            <Link
              to={`/app/agents/${agent.id}`}
              className="card bg-base-100 image-fit w-auto lg:w-full shadow-sm relative group overflow-hidden"
            >
              <figure className="relative">
                <img
                  src={`http://localhost:5000/${agent.small_image}`}
                  alt="Shoes"
                  className="w-full h-64 object-cover rounded-md"
                />
                <div className="absolute inset-0 bg-black opacity-30 group-hover:opacity-70 transition-opacity duration-200 rounded-md"></div>
              </figure>

              <div className="absolute bottom-0 w-full z-10 px-2">
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
            </Link>
          </motion.div>
        ))}
      </div>
      <div className="flex justify-center pb-4">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </motion.div>
  );
};

export default AgentScreen;
