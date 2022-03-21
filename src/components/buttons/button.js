// import libaries 
import React from 'react';

//import components
import heart from '../../assets/svg/heart-icon.svg';


function Button({ label, size, color }) {

  return (
    <button className={`${size} ${color}`} type='submit'>
        <div className='content'>
            <figure>
                <img src={heart} alt='Heart Icon'/> 
            </figure>
            <label>
                {label}
            </label>
        </div>
    </button>
  );
}

export default Button;
