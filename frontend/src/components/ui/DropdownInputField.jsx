import React from "react";

export const DropdownInputField = ({ value, onChange }) => {
  return (
    <select
      value={value}
      onChange={onChange}
      className="select rounded-xl font-normal mr-5 w-50"
    >
      <option value="" className="text-pcg-outline">
        All Regions
      </option>
      <option value="Global">GLOBAL</option>
      <option value="Emea">EMEA</option>
      <option value="North America">NORTH AMERICA</option>
      <option value="Apac">APAC</option>
      <option value="Brazil">BRAZIL</option>
      <option value="Latin America">LATIN AMERICA</option>
      <option value="Japan">JAPAN</option>
      <option value="Korea">KOREA</option>
    </select>
  );
};

export default DropdownInputField;
