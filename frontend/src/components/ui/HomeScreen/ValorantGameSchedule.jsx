import useSchedule from "../../../hooks/useSchedule";

const ValorantGameSchedule = () => {
  const limit = 4;
  const { schedules } = useSchedule(1, "", limit);

  return (
    <div className="px-8 pb-10 gap-4 md:px-4 md:gap-y-0 lg:gap-x-2 lg:gap-y-0 lg:px-2 grid grid-cols-1 sm:grid-cols-2 3xl:grid-cols-4 3xl:px-34">
      {schedules.map((schedule, index) => (
        <div
          key={schedule.id || index}
          className="card bg-zinc-800 w-auto lg:w-auto 3xl:w-auto shadow-xl text-center text-white items-center mb-5 pt-8"
        >
          <h2 className="card-title font-heading mt-2 text-lg px-2">
            {schedule.match_event}
          </h2>
          <div className="card-body items-center text-center min-h-64 flex flex-col justify-center">
            <div className="flex items-center justify-between w-full">
              <div className="flex flex-col items-center w-1/3">
                <img
                  src={schedule.logo1}
                  alt={schedule.team1}
                  className="team-logo w-20 h-20 object-contain"
                  loading="lazy"
                />
                <p className="team-name text-sm mt-2">{schedule.team1}</p>
              </div>

              <div className="flex flex-col justify-center items-center w-1/3">
                <h2 className="game-date card-title font-heading text-sm font-thin">
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

              <div className="flex flex-col items-center w-1/3">
                <img
                  src={schedule.logo2}
                  alt={schedule.team2}
                  className="team-logo w-20 h-20 object-contain"
                  loading="lazy"
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

export default ValorantGameSchedule;
