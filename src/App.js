import React, { useState, useEffect } from 'react';
import DisplayContainer from './DisplayContainer/DisplayContainer';
import './App.css';


const App = () => {
  // random array of length 20
  const unsortedArray = Array.from({
    length: 20
  }, (v, i) => 1 + Math.floor(Math.random() * Math.floor(100)));

  const [unsortedArrayState, setUnsortedArrayState] = useState(unsortedArray);

  const sort = (array) => {
    //console.log(array);
    console.log("sort method was trig")
    for (let i = 0; i < array.length; i++) {
      //console.log(i, " " ,array[i])
      setTimeout(() => {
        for (let j = 1; j < array.length; j++) {
          if (array[j - 1] > array[j]) {
            [array[j - 1], array[j]] = [array[j], array[j - 1]];
            setUnsortedArrayState([...array]);
            console.log(unsortedArrayState);
          }
        }
      }, 250 * (i + 1));
    }
  }

  // useEffect(() => {
  //   console.log("updated: ",unsortedArrayState);
  // }, [unsortedArrayState]);


  return (
    <div className="App">
      <DisplayContainer unsortedArray={unsortedArrayState}/>
      <button onClick={() => sort(unsortedArrayState)}>Sort</button>
    </div>
  );
}

export default App;

//() => sort(unsortedArrayState)
// const draw = array => {
//   array.forEach((x, i) => {
//     document.getElementById(`d-${i}`).innerText = x;
//     document.getElementById(`d-${i}`).style.width = `${x}%`;
//   });
// };
//
// sort(unsortedArray);
