import React from 'react';
import './Bar.css';

const Bar = ({ n, id }) => {

  return (
    <div className='bar' id={`d-${id}`} style={{width: `${n}%`}}>{n}</div>
  )
}

export default Bar;
