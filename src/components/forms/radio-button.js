// import libaries
import React from "react";

function RadioButton({ value, setState, placeholder, name }) {
  const handleChange = (e) => {
    setState(value);
  };

  return (
    <div className="radio-button-content">
      <input
        value={value}
        name={name}
        type="radio"
        className={"input radio-button"}
        onClick={(e) => handleChange(e)}
        required
      />
      <label>{value}</label>
    </div>
  );
}

export default RadioButton;
