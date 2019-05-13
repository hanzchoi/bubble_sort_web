import React from 'react';
import './DisplayContainer.css';
import Bar from '../Bar/Bar';

const DisplayContainer = ({ unsortedArray }) => {
  const renderBars = () => {
    return unsortedArray.map((n, i) => <Bar key={i} n={n} id={i} />)
  }
  return (
    <div className="display-container">
      {renderBars()}
    </div>
  )
}

export default DisplayContainer;
