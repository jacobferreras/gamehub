import React from "react";

export const DropdownInputField = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="select rounded-xl font-normal mr-5 w-50 bg-neutral-700 text-white"
    >
      <option value="" className="text-white">
        All Regions
      </option>
      <option value="EMEA">EMEA</option>
      <option value="Americas">AMERICAS</option>
      <option value="PACIFIC">PACIFIC</option>
      <option value="Global">GLOBAL</option>
    </select>
  );
};

export default DropdownInputField;
