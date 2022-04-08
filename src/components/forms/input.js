// import libaries
import React from "react";

function Input({ value, setState, placeholder, size, label }) {
  const handleChange = (e) => {
    setState(e.target.value);
  };

  return (
    <div className="input-content">
      <label>{label}</label>
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        className={` input ${size}`}
        onChange={(e) => handleChange(e)}
        required
      />
    </div>
  );
}

export default Input;
