import { useState, useEffect } from "react";
import axios from "axios";

const DotaGamesSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/upcomingGames?limit=4&game=dota 2"
        );
        setSchedules(
          Array.isArray(response.data.data) ? response.data.data : []
        );
      } catch (error) {
        console.error("Error fetching schedules:", error);
        setSchedules([]);
      }
    };

    fetchSchedules();
  }, []);
  return (
    <div className="px-8 pb-10 gap-4 md:px-4 md:gap-y-0 lg:gap-x-2 lg:gap-y-0 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-34">
      {schedules.map((schedule, index) => (
        <div
          key={schedule.id || index}
          className="card bg-zinc-800  w-auto lg:w-auto 3xl:w-auto shadow-xl text-center text-white items-center mb-5"
        >
          <h2 className="card-title mt-2 text-xl">{schedule.match_event}</h2>
          <h2 className="card-title mt-2 text-xl">{schedule.match_series}</h2>
          <div className="card-body items-center text-center min-h-64 flex flex-col justify-center">
            <div className="flex items-center justify-between w-full">
              {/* Team 1 */}
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={schedule.logo1}
                  alt={schedule.team1}
                  className="team-logo w-20 h-20 object-contain"
                />
                <p className="team-name text-sm mt-2">{schedule.team1}</p>
              </div>
              {/* Match Info */}
              <div className="flex flex-col justify-center items-center w-1/3">
                <h2 className="game-date card-title text-sm font-thin">
                  {new Date(schedule.unix_timestamp).toLocaleDateString(
                    "en-PH",
                    {
                      year: "numeric",
                      month: "short",
                      day: "numeric",
                    }
                  )}
                </h2>
                <p className="game-time text-3xl font-bold mb-5">
                  {new Date(schedule.unix_timestamp).toLocaleTimeString(
                    "en-PH",
                    {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true,
                      timeZone: "Asia/Manila",
                    }
                  )}{" "}
                  PHT
                </p>
              </div>
              {/* Team 2 */}
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={schedule.logo2}
                  alt={schedule.team2}
                  className="team-logo w-20 h-20 object-contain"
                />
                <p className="team-name text-sm mt-2">{schedule.team2}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DotaGamesSchedule;
