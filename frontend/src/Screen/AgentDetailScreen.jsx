import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BackArrow from "../assets/back_arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const AgentDetailScreen = () => {
  const { id } = useParams();
  const [agent, setAgent] = useState(null);
  const [selectedSkill, setSelectedSkill] = useState(1);

  useEffect(() => {
    const fetchAgentDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/agents/${id}`);
        setAgent(response.data.data);
      } catch (error) {
        console.error("Error fetching agent details:", error);
      }
    };

    fetchAgentDetails();
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

  return (
    <>
      <motion.div
        variants={pageVariants}
        initial="initial"
        animate="animate"
        exit="exit"
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="min-h-screen pt-18 pb-20"
        style={{
          backgroundImage: `url("http://localhost:5000/uploads/bg.png")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="flex flex-row justify-start pl-4">
          <Link to="/app/agents">
            <img
              src={BackArrow}
              alt="Back"
              className="w-12 h-12 cursor-pointer"
            />
          </Link>
        </div>

        {/* small screen */}
        <div className="block lg:hidden">
          <img
            src={`http://localhost:5000/${agent.large_image}`}
            alt=""
            className="h-auto"
          />
          <h1 className="text-4xl text-center">{agent.name}</h1>
          <div className="flex flex-row gap-x-2 justify-center mt-2">
            <img src={agent.role_image} alt="" className="h-[20px] w-[20px]" />
            <h2>{agent.role}</h2>
          </div>
          <p className="flex justify-center text-center">{agent.description}</p>
          <div className="px-2 mt-4">
            <div className="card bg-base-100 video-fit w-auto shadow-sm">
              <video
                src={skillData[selectedSkill - 1].video}
                autoPlay
                controls
                className="rounded-lg"
                key={skillData[selectedSkill - 1].video}
              ></video>
            </div>
          </div>
          <h1 className="text-center text-lg mt-4">
            {skillData[selectedSkill - 1].name}
          </h1>
          <p className="flex justify-center text-center mt-2">
            {skillData[selectedSkill - 1].description}
          </p>

          <div className="flex flex-row gap-x-4 justify-center mt-4">
            {skillData.map((skill, index) => (
              <img
                key={index}
                src={skill.logo}
                alt=""
                className={`h-auto w-[50px] cursor-pointer opacity-40  ${selectedSkill === index + 1 ? "opacity-100" : ""}`}
                onClick={() => setSelectedSkill(index + 1)}
              />
            ))}
          </div>
        </div>

        {/* larger screen */}
        <div className="hidden lg:block">
          <div className="flex flex-row items-stretch justify-center w-full gap-x-0">
            <div className="flex flex-col w-[55%] 3xl:w-[65%]">
              <div className="flex flex-row gap-x-2 justify-start pl-6">
                <motion.img
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 40 }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  src={agent.role_image}
                  alt=""
                  className="h-[25px] w-[25px] mt-2"
                />
                <motion.h2
                  className="text-xl mt-2"
                  initial={{ opacity: 0, y: -50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                >
                  {agent.role}
                </motion.h2>
              </div>
              <motion.h1
                className="text-8xl justify-start pl-4"
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {agent.name}
              </motion.h1>
              <motion.p
                className="flex justify-start pl-6 text-lg mt-2"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                {agent.description}
              </motion.p>
              <div className="px-2 mt-4 pl-4">
                <div className="card bg-base-100 video-fit w-full aspect-video shadow-sm flex items-center justify-center min-h-[300px]">
                  <video
                    src={skillData[selectedSkill - 1].video}
                    autoPlay
                    className="rounded-lg w-full h-full object-cover"
                    key={skillData[selectedSkill - 1].video}
                    loop
                  ></video>
                </div>
                <div className="text-center w-full">
                  <motion.h1
                    className="text-lg mt-4 "
                    initial={{ opacity: 0, y: -50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1 }}
                  >
                    {skillData[selectedSkill - 1].name}
                  </motion.h1>
                </div>
                <motion.p
                  className="text-center w-full mt-2"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.5 }}
                >
                  {skillData[selectedSkill - 1].description}
                </motion.p>
                <div className="flex flex-row gap-x-4 justify-center mt-4 w-full">
                  {skillData.map((skill, index) => (
                    <div key={index} className="flex flex-col">
                      <img
                        src={skill.logo}
                        alt=""
                        className={`h-auto w-[50px] cursor-pointer opacity-40  ${selectedSkill === index + 1 ? "opacity-100" : ""}`}
                        onClick={() => setSelectedSkill(index + 1)}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <motion.img
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              src={`http://localhost:5000/${agent.large_image}`}
              alt=""
              className="w-[45%]  h-auto rounded-lg shadow-lg self-stretch animate-pulse size-1"
            />
          </div>
        </div>
      </motion.div>
      <div className="bg-neutral-950">
        <div className="flex flex-row justify-center  gap-x-8 px-20">
          <figure className="w-full lg:w-180 flex justify-center items-center mt-12 mb-12">
            <iframe
              width="100%"
              height="350"
              src={agent.fullguide_url}
              title={agent.fullguide_title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg min-h-[200px] lg:min-h-[250px] 3xl:min-h-[350px] "
            ></iframe>
          </figure>
          <div className="mt-12">
            <h2 className="card-title text-4xl text-white">
              {agent.fullguide_title}
            </h2>
            <div>
              <div className="badge badge-outline">
                {agent.fullguide_author}
              </div>
            </div>
            <a
              href={agent.fullguide_channel}
              className="lg:text-xs 3xl:text-lg text-blue-700"
            >
              {agent.fullguide_channel}
            </a>
            <p className="text-sm text-white mt-2">
              {agent.fullguide_description}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default AgentDetailScreen;
