// import libaries 
import React from 'react';

function Form ({children}) {

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <form onSubmit={e => handleSubmit(e)}>
        {children}
    </form>
  );
}

export default Form;
