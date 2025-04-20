import React from "react";

export const DropdownInputField = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="select rounded-xl font-normal mr-5 w-50"
    >
      <option value="" className="text-pcg-outline">
        All Ranks
      </option>
      <option value="Iron">Iron</option>
      <option value="Bronze">Bronze</option>
      <option value="Silver">Silver</option>
      <option value="Gold">Gold</option>
      <option value="Platinum">Platinum</option>
      <option value="Diamond">Diamond</option>
      <option value="Ascendant">Ascendant</option>
      <option value="Immortal">Immortal</option>
      <option value="Radiant">Radiant</option>
    </select>
  );
};

export default DropdownInputField;
