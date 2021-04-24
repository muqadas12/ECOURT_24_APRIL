import React from 'react';

import './Cover.css';

const CoveringCard = props => {
  return (
    <div className={`Cover ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default CoveringCard;
