import React from "react";
import PropTypes from "prop-types";

const TodoListInputfield = ({
  type = "text",
  placeholder = "Enter Text",
  onChange,
  value,
  showIcon = false,
}) => {
  return (
    <label className="input">
      {showIcon && (
        <svg
          className="h-[1rem] w-auto opacity-10"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
      )}

      <input
        type={type}
        required
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </label>
  );
};

TodoListInputfield.propTypes = {
  type: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  value: PropTypes.string,
  showIcon: PropTypes.bool,
  onUpdateItem: PropTypes.func.isRequired,
};

export default TodoListInputfield;
