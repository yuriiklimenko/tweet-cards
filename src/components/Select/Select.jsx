import { useState } from "react";
import PropTypes from "prop-types";
import css from "./Select.module.css";

export const Select = ({ handleChange }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    { value: "showAll", label: "Show all" },
    { value: "follow", label: "Follow" },
    { value: "followings", label: "Followings" },
  ];

  const handleChangeSelect = (event) => {
    const value = event.target.value;

    setSelectedValue(value);

    handleChange(value);
  };

  return (
    <div className={css.selectContainer}>
      <select
        value={selectedValue}
        onChange={handleChangeSelect}
        className={css.selectInput}
      >
        <option value="" disabled>
          Select value...
        </option>

        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

Select.propTypes = {
  handleChange: PropTypes.func.isRequired,
};
