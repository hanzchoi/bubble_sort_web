import React from 'react';
import './Button.css';

const Button = ({name, sort, unsortedArray}) => {
  return(
    <button className="button" onClick={() => sort(unsortedArray)}>
      {name}
    </button>
  )
}

export default Button;
