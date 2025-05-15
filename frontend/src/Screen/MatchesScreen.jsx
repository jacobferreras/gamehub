import { useState, useEffect } from "react";
import axios from "axios";
import Pagination from "../components/common/Pagination";
import DropdownInputField from "../components/ui/DropdownInputField";

const MatchesScreen = () => {
  const [schedules, setSchedules] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [region, setRegion] = useState("");
  const limit = 8;
  const game = "valorant";

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/upcomingGames?page=${currentPage}&limit=${limit}&game=${game}&region=${region}`
        );
        console.log("API Response:", response.data);
        setSchedules(
          Array.isArray(response.data.data) ? response.data.data : []
        );
        setTotalPages(response.data.totalPages || 1);
      } catch (error) {
        console.error("Error fetching schedules:", error);
        setSchedules([]);
      }
    };

    fetchSchedules();
  }, [currentPage, limit, game, region]);

  return (
    <>
      <div className="bg-neutral-950 min-h-screen">
        <div className="flex justify-center pt-20 pb-10 lg:justify-end lg:right-30 xl:pr-30  ">
          <DropdownInputField
            value={region}
            onChange={(e) => setRegion(e.target.value)}
          />
        </div>
        <div className="px-4 pb-2 gap-4 md:px-4 md:gap-y-0 lg:gap-x-2 lg:gap-y-0 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-34">
          {schedules.map((schedule, index) => (
            <div
              key={schedule.id || index}
              className="card bg-zinc-800 w-auto lg:w-auto 3xl:w-auto shadow-xl text-center text-white items-center mb-5"
            >
              <h2 className="card-title mt-2 text-lg px-2">
                {schedule.match_event}
              </h2>
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
                          timeZone: "UTC",
                        }
                      )}
                    </h2>
                    <p className="game-time text-3xl font-bold mb-5">
                      {schedule.unix_timestamp
                        ? new Date(schedule.unix_timestamp).toLocaleTimeString(
                            "en-PH",
                            {
                              hour: "2-digit",
                              minute: "2-digit",
                              timeZone: "UTC",
                            }
                          )
                        : ""}
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
        <div className="flex justify-center">
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
          />
        </div>
      </div>
    </>
  );
};

export default MatchesScreen;
