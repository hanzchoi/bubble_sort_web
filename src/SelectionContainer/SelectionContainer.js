import React from 'react';
import './SelectionContainer.css';
import Button from '../Button/Button';

const SelectionContainer = ({unsortedArray, sort}) => {

  return(
    <div className="selection-container">
      <Button name={"Sort"} sort={sort} unsortedArray={unsortedArray}/>
    </div>
  )
}

export default SelectionContainer
