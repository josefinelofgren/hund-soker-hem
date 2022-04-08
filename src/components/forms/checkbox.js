// import libaries
import React from "react";

function Checkbox({ value, label, setState, checked, placeholder, size }) {
  const handleChange = (e) => {
    setState(!value);
  };

  return (
    <div className='checkbox-content'>
      <input
        placeholder={placeholder}
        value={value}
        type="checkbox"
        checked={checked}
        className={"input checkbox"}
        onClick={(e) => handleChange(e)}
        required
      />
      <label className={`${size}`}>{label}</label>
    </div>
  );
}

export default Checkbox;
