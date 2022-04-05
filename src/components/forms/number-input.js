// import libaries
import React from "react";

function InputNumber({ name, setState, style }) {
  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    // If value input is a number
    if (e.target.value === "" || re.test(e.target.value)) {
      setState(e.target.value);
    }
  };

  return (
    <input
      name={name}
      type="text"
      className={style}
      onChange={(e) => handleChange(e)}
    />
  );
}

export default InputNumber;
