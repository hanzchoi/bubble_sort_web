import React from 'react';
import './DisplayContainer.css';
import Bar from '../Bar/Bar';

//Maybe I should declare the array here and render each one by calling the bar component
const DisplayContainer = ({unsortedArray}) => {
  console.log(unsortedArray)
  return(<div></div>)
}

export default DisplayContainer;
// placeholders divs
// unsortedArray.forEach((n, i) => {
//   const root = document.getElementById('app');
//   const newDiv = document.createElement('div');
//   newDiv.setAttribute('id', `d-${i}`);
//   newDiv.style.backgroundColor = "black";
//   newDiv.style.color = "white";
//   newDiv.innerText = n;
//   newDiv.style.width = `${n}%`;
//   root.appendChild(newDiv);
// });
