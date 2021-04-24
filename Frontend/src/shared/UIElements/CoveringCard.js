import React from 'react';

import './CoveringCard.css';

const CoveringCard = props => {
  return (
    <div className={`CoveringCard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default CoveringCard;
