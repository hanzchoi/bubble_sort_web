import React, { useState } from 'react';
import DisplayContainer from './DisplayContainer/DisplayContainer';
import './App.css';


// TODO: first render out the inital state of the unsorted array
const App = () => {
  // random array of length 20
  const unsortedArray = Array.from({
    length: 20
  }, (v, i) => 1 + Math.floor(Math.random() * Math.floor(100)));

  const [unsortedArrayState, setUnsortedArrayState] = useState(unsortedArray);

  // const sort = (array) => {
  //   for (let i = 0; i < array.length; i++) {
  //     setTimeout(function() {
  //       for (let j = 1; j < array.length; j++) {
  //         if (array[j - 1] > array[j]) {
  //           [array[j - 1], array[j]] = [array[j], array[j - 1]];
  //           draw(array);
  //         }
  //       }
  //     }, 250 * (i + 1));
  //   }
  // }


  // const draw = array => {
  //   array.forEach((x, i) => {
  //     document.getElementById(`d-${i}`).innerText = x;
  //     document.getElementById(`d-${i}`).style.width = `${x}%`;
  //   });
  // };
  //
  // sort(unsortedArray);

  return (
    <div className="App">
      <DisplayContainer unsortedArray={unsortedArrayState}/>
    </div>
  );
}

export default App;
