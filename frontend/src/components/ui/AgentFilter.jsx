import Duelist from "../../assets/duelist.png";
import Sentinel from "../../assets/sentinel.png";
import Controller from "../../assets/controller.png";
import Initiator from "../../assets/initiator.png";

const AgentFilter = ({ value, onChange }) => {
  return (
    <div>
      <div className="flex flex-row gap-x-2 justify-end items-end pr-4 pt-2 pb-4">
        <button
          className={`h-[30px] w-[30px] rounded-full border-2 text-white border-gray-200 opacity-80 flex items-center justify-center text-xs font-bold cursor-pointer transition-transform duration-200 ease-in-out ${
            value === "" ? "scale-150" : ""
          }`}
          onClick={() => onChange({ target: { value: "" } })}
        >
          All
        </button>
        <img
          src={Duelist}
          alt="Duelist"
          className={`h-[30px] w-[30px] cursor-pointer transition-transform duration-200 ease-in-out  ${value === "Duelist" ? "scale-140" : ""}`}
          onClick={() => onChange({ target: { value: "Duelist" } })}
          loading="lazy"
        />
        <img
          src={Sentinel}
          alt="Sentinel"
          className={`h-[30px] w-[30px] cursor-pointer transition-transform duration-200 ease-in-out ${value === "Sentinel" ? "scale-140" : ""}`}
          onClick={() => onChange({ target: { value: "Sentinel" } })}
          loading="lazy"
        />
        <img
          src={Controller}
          alt="Controller"
          className={`h-[30px] w-[30px] cursor-pointer transition-transform duration-200 ease-in-out ${value === "Controller" ? "scale-140 " : ""}`}
          onClick={() => onChange({ target: { value: "Controller" } })}
          loading="lazy"
        />
        <img
          src={Initiator}
          alt="Initiator"
          className={`h-[30px] w-[30px] cursor-pointer transition-transform duration-200 ease-in-out ${value === "Initiator" ? "scale-140" : ""}`}
          onClick={() => onChange({ target: { value: "Initiator" } })}
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default AgentFilter;
