import React, { useState, useRef, useEffect } from "react";

const options = [
  "Bronze",
  "Silver",
  "Gold",
  "Platinum",
  "Diamond",
  "Ascendant",
  "Immortal",
  "Radiant",
];

const DropdownInputField = ({ selected, setSelected }) => {
  const [open, setOpen] = useState(false);
  const inputRef = useRef("");

  const handleSelect = (option) => {
    setSelected(option);
    setOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="dropdown w-auto" ref={inputRef}>
      <input
        type="text"
        className="input input-bordered w-full pr-10"
        placeholder="Select Rank"
        value={selected}
        readOnly
        onClick={() => setOpen((prev) => !prev)}
      />
      <span
        className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
        onClick={() => setOpen((prev) => !prev)}
        tabIndex={0}
        role="button"
      >
        <svg
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </span>
      {open && (
        <ul className="dropdown-content menu bg-base-100 rounded-box z-10 w-full p-2 shadow-md mt-1">
          {options.map((option) => (
            <li key={option}>
              <a
                className={`block px-4 py-2 cursor-pointer hover:bg-base-200 ${
                  selected === option ? "bg-base-200 font-semibold" : ""
                }`}
                onClick={() => handleSelect(option)}
              >
                {option}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownInputField;
