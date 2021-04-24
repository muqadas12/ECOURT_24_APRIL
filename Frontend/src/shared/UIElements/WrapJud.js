import React from 'react';

import './WrapJud.css';

const WrapJud = props => {
  return (
    <div className={`wrapJu ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default WrapJud;
