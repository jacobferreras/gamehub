import { useState, useEffect } from "react";
import axios from "axios";

const PubgGameSchedule = () => {
  const [schedules, setSchedules] = useState([]);

  useEffect(() => {
    const fetchSchedules = async () => {
      try {
        const response = await axios.get(
          "http://localhost:5000/pubgSchedule?limit=4"
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
    <div className="flex justify-center">
      {schedules.map((schedule, index) => (
        <div
          className="card bg-zinc-800  text-neutral-content w-96"
          key={schedule.id || index}
        >
          <div className="card-body items-center text-center">
            <img
              src={schedule.image_url}
              atl={schedule.title}
              className="team-logo w-20 h-20 object-contain"
            />
            <div className="flex flex-col justify-center items-center ">
              <h2 className="card-title texl-xl font-bold">{schedule.title}</h2>
              <p className="text-xs">Date:</p>
              <p className="text-lg font-bold">{schedule.date}</p>
              <p className="text-xs">Paticipating Region:</p>
              <p className="text-lg font-bold">{schedule.region}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PubgGameSchedule;
