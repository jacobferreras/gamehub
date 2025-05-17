import Duelist from "../../assets/duelist.png";
import Sentinel from "../../assets/sentinel.png";
import Controller from "../../assets/controller.png";
import Initiator from "../../assets/initiator.png";

const AgentFilter = ({ value, onChange }) => {
  return (
    <div>
      <div className="flex flex-row gap-x-2 justify-end items-end pr-12 pb-4">
        <button
          className={`h-[30px] w-[30px] rounded-full border-2 border-gray-400 flex items-center justify-center text-xs font-bold cursor-pointer ${
            value === "" ? "" : ""
          }`}
          onClick={() => onChange({ target: { value: "" } })}
        >
          All
        </button>
        <img
          src={Duelist}
          alt="Duelist"
          className={`h-[30px] w-[30px] cursor-pointer  ${value === "Duelist" ? "" : ""}`}
          onClick={() => onChange({ target: { value: "Duelist" } })}
        />
        <img
          src={Sentinel}
          alt="Sentinel"
          className={`h-[30px] w-[30px] cursor-pointer ${value === "Sentinel" ? "" : ""}`}
          onClick={() => onChange({ target: { value: "Sentinel" } })}
        />
        <img
          src={Controller}
          alt="Controller"
          className={`h-[30px] w-[30px] cursor-pointer ${value === "Controller" ? "" : ""}`}
          onClick={() => onChange({ target: { value: "Controller" } })}
        />
        <img
          src={Initiator}
          alt="Initiator"
          className={`h-[30px] w-[30px] cursor-pointer ${value === "Initiator" ? "" : ""}`}
          onClick={() => onChange({ target: { value: "Initiator" } })}
        />
      </div>
    </div>
  );
};

export default AgentFilter;
