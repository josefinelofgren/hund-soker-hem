// import libaries 
import React, { useState } from 'react';

function InputButton({ label, currentState }) {

  const [state, setState] = useState('option-1')
  
    return (
      <button onClick={() => setState(currentState)} className={state === `${currentState}` ? `input-btn is-active` : `input-btn`} type='submit'>
        <div className='content'>
            <label>
                {label}
            </label>
        </div>
      </button>
  );
}

export default InputButton;
