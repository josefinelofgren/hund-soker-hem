// import libaries
import React, { useState } from "react";

function DonationForm() {
  const [active, setActive] = useState("");
  const [state, setState] = useState("");
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  };

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
      <form onSubmit={handleSubmit}>
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
        <p>... eller ange en valfri summa. Jag vill bidra med</p>
        <input
          type="text"
          onChange={(e) => handleChange(e)}
          onClick={(e) => handleClick(e)}
          value={value}
          className={
            active === value ? "sm input-button is-active" : "sm input-button"
          }
        />
        <p>kr / månad</p>
        <input
          type="submit"
          value="Vidare till dina uppgifter"
          className="button no-icon primary"
        />
      </form>
    </div>
  );
}

export default DonationForm;
