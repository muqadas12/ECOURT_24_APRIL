import React from 'react';

import './CoverCard.css';

const Card = props => {
  return (
    <div className={`ccard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default Card;
