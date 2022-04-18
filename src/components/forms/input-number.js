// import libaries
import React from "react";

function InputNumber({ value, label, placeholder, setState, style }) {
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    // If value input is a number
    if (e.target.value === "" || re.test(e.target.value)) {
      setState(e.target.value);
    }
  };

  return (
    <div className="input-content">
      <label>{label}</label>
      <label className="required">*</label>
      <input
        placeholder={placeholder}
        value={value}
        type="text"
        className={"input number"}
        onChange={(e) => handleChange(e)}
        required
      />
    </div>
  );
}

export default InputNumber;
