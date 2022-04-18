// import libaries
import React, { useState } from "react";

function DonationForm({ setState }) {
  const [active, setActive] = useState("");
  const [value, setValue] = useState("");

  const handleClick = (e) => {
    setState(e.target.name);
    setActive(e.target.value);
  };

  const handleChange = (e) => {
    const re = /^[0-9\b]+$/;

    // If value input is a number
    if (e.target.value === "" || re.test(e.target.value)) {
      setValue(e.target.value);
    }
  };

  return (
    <div className="donation-form">
      <div className="grid-container">
        <div className="grid-item">
          <input
            type="submit"
            name={50}
            value={"50 kr"}
            onClick={(e) => handleClick(e)}
            className={
              active === "50 kr" ? "input-button is-active" : "input-button"
            }
          />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <input
            type="submit"
            name={100}
            value={"100 kr"}
            onClick={(e) => handleClick(e)}
            className={
              active === "100 kr" ? "input-button is-active" : "input-button"
            }
          />
        </div>
        <div className="grid-item"></div>
        <div className="grid-item">
          <input
            type="submit"
            name={200}
            value={"200 kr"}
            onClick={(e) => handleClick(e)}
            className={
              active === "200 kr" ? "input-button is-active" : "input-button"
            }
          />
        </div>
      </div>
      <p className="left-text">
        ... eller ange en valfri summa. Jag vill bidra med
      </p>
      <div className="input-optional">
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          onClick={(e) => handleClick(e)}
          value={value}
          name={value}
          className={
            active === value && value !== ""
              ? "sm input-button is-active"
              : "sm input-button"
          }
        />
        <p className="right-text">kr / månad</p>
      </div>
    </div>
  );
}

export default DonationForm;
