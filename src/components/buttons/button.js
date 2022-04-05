// import libaries
import React from "react";
import { Link } from "react-router-dom";

//import components
import heart from "../../assets/svg/heart-icon.svg";

function Button({ label, size, color, path, disabled }) {
  return (
    <Link to={`${path}`}>
      <button
        className={disabled ? `disabled ${size} ${color}` : `${size} ${color}`}
        type="submit"
      >
        <div className="content">
          <figure className={disabled ? "disabled" : ""}>
            <img src={heart} alt="Heart Icon" />
          </figure>
          <label>{label}</label>
        </div>
      </button>
    </Link>
  );
}

export default Button;
