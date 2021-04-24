import React from 'react';

import './Wrap.css';

const Wrap = props => {
  return (
    <div className={`wrap ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Wrap;
