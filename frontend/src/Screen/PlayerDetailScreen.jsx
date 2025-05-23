import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BackArrow from "../assets/back_arrow.png";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import TwitchIcon from "../assets/twitch_icon.png";
import XIcon from "../assets/x_icon.png";
import YoutubeIcon from "../assets/youtube_icon.png";
import InstagramIcon from "../assets/instagram_icon.png";
import NewsBg from "../assets/NewsBg.png";

const PlayerDetailScreen = () => {
  const { ign } = useParams();
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    const fetchPlayerDetails = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/proplayers/ign/${ign}`
        );
        setPlayer(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.error("Error fetching player details:", error);
      }
    };

    fetchPlayerDetails();
  }, [ign]);

  if (!player) {
    return (
      <div className="min-h-screen bg-neutral-950 pt-20">
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div
      className="min-h-screen pt-12 flex flex-col items-center"
      style={{
        backgroundImage: `url(${NewsBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="w-full max-w-7xl px-2 sm:px-4 md:px-8 lg:px-10 pt-10">
        <Link to="/app/players">
          <button className="flex items-center gap-2 text-white hover:text-blue-400 transition mb-4">
            {" "}
            <img src={BackArrow} alt="Back" className="h-10 w-10" />
            <span className="text-base font-medium">Back to Players</span>
          </button>
        </Link>
      </div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          duration: 0.5,
          ease: "easeOut",
        }}
        className="flex flex-col lg:flex-row w-full max-w-7xl  px-2 sm:px-4 md:px-8 lg:px-10 gap-8 lg:gap-16 mb-8"
      >
        <div className="flex flex-col items-center bg-neutral-900 rounded-xl shadow-lg p-4 sm:p-6 md:p-8 w-full lg:w-[32%] min-w-[0] max-w-full mb-8 lg:mb-0">
          <img
            src={player.image}
            alt=""
            className="h-[220px] sm:h-[280px] md:h-[350px] w-fit object-cover rounded-lg mb-4 border-2 border-neutral-800"
          />
          <h1 className="text-2xl sm:text-3xl font-bold mb-2 text-center text-white truncate w-full">
            {player.ign}
          </h1>
          <p className="mb-4 sm:mb-6 text-sm sm:text-base text-neutral-300 text-center w-full">
            {player.about}
          </p>
          <div className="flex flex-col gap-2 w-full mb-4">
            <div className="flex flex-row justify-between text-neutral-400 text-xs sm:text-base">
              <span className="font-semibold">Name:</span>
              <span className="text-white">{player.name}</span>
            </div>
            <div className="flex flex-row justify-between text-neutral-400 text-xs sm:text-base">
              <span className="font-semibold">Country:</span>
              <span className="text-white">{player.country}</span>
            </div>
            <div className="flex flex-row justify-between text-neutral-400 text-xs sm:text-base">
              <span className="font-semibold">Team:</span>
              <span className="text-white">{player.team}</span>
            </div>
            <div className="flex flex-row justify-between text-neutral-400 text-xs sm:text-base">
              <span className="font-semibold">Birthday:</span>
              <span className="text-white">{player.birthday}</span>
            </div>
          </div>
          <div className="flex flex-row justify-center gap-4 sm:gap-6 mt-2 sm:mt-4">
            {player.twitch && (
              <motion.a
                href={player.twitch}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={TwitchIcon}
                  alt="Twitch"
                  className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer hover:drop-shadow-lg"
                />
              </motion.a>
            )}
            {player.x && (
              <motion.a
                href={player.x}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={XIcon}
                  alt="X"
                  className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer hover:drop-shadow-lg"
                />
              </motion.a>
            )}
            {player.youtube && (
              <motion.a
                href={player.youtube}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={YoutubeIcon}
                  alt="YouTube"
                  className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer hover:drop-shadow-lg"
                />
              </motion.a>
            )}
            {player.instagram && (
              <motion.a
                href={player.instagram}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                whileTap={{ scale: 0.95 }}
              >
                <img
                  src={InstagramIcon}
                  alt="Instagram"
                  className="h-7 w-7 sm:h-8 sm:w-8 cursor-pointer hover:drop-shadow-lg"
                />
              </motion.a>
            )}
          </div>
        </div>

        <div className="flex-1 flex flex-col gap-6 md:gap-8">
          <div className="bg-neutral-900 rounded-xl shadow p-4 sm:p-6 md:p-8 mb-2">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white text-center">
              MOUSE SETTINGS
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">DPI</p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.dpi}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Sensitivity
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.mouse_sensitivity}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">Hz</p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.Hz}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Scoped Sensitivity
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.scoped_sensitivity}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Windows Sensitivity
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.windows_sensitivity}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Raw Input Buffer
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.input_buffer}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl shadow p-4 sm:p-6 md:p-8 mb-2">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white text-center">
              GENERAL VIDEO SETTINGS
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Display Mode
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.display_mode}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Resolution
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.resolution}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Aspect Ratio
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.aspect_ratio}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  NVIDIA Reflex
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.nvidia_reflex}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-neutral-900 rounded-xl shadow p-4 sm:p-6 md:p-8 mb-2">
            <h1 className="text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 text-white text-center">
              GRAPHICS QUALITY SETTINGS
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8 mb-2">
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Multithreaded Rendering
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.rendering}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Material Quality
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.material_quality}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Texture Quality
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.texture_quality}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Detail Quality
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.detail_quality}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  UI Quality
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.ui_quality}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Vignette
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.vignette}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">VSync</p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.vsync}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Anti-Aliasing
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.anti_aliasing}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Anisotropic Filtering
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.anisotropic_filtering}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Improve Clarity
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.improve_clarity}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Experimental Sharpening
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.experimental_harpening}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">Bloom</p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.bloom}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Distortion
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.distortion}
                </p>
              </div>
              <div className="flex flex-col items-center">
                <p className="text-neutral-400 text-xs sm:text-base">
                  Cast Shadows
                </p>
                <p className="text-base sm:text-lg text-white font-medium">
                  {player.cast_shadows}
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default PlayerDetailScreen;
