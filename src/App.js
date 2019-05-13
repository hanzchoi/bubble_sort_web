import React, { useState, useEffect } from 'react';
import DisplayContainer from './DisplayContainer/DisplayContainer';
import SelectionContainer from './SelectionContainer/SelectionContainer';
import './App.css';


const App = () => {
  // random array of length 20
  const unsortedArray = Array.from({
    length: 20
  }, (v, i) => 1 + Math.floor(Math.random() * Math.floor(100)));

  const [unsortedArrayState, setUnsortedArrayState] = useState(unsortedArray);

  const sort = (array) => {
    for (let i = 0; i < array.length; i++) {
      setTimeout(() => {
        for (let j = 1; j < array.length; j++) {
          if (array[j - 1] > array[j]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            setUnsortedArrayState([...array]);
          }
        }
      }, 250 * (i + 1));
    }
  }


  return (
    <div className="App">
      <DisplayContainer unsortedArray={unsortedArrayState}/>
      <SelectionContainer sort={sort} unsortedArray={unsortedArrayState}/>
    </div>
  );
}

export default App;
// <SelectionContainer sort={sort} unsortedArray={unsortedArrayState}/>
