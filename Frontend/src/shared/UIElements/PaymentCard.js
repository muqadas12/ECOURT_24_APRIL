import React from 'react';

import './Payment.css';

const PaymentCard = props => {
  return (
    <div className={`pcard ${props.className}`} style={props.style}>
      {props.children}
    </div>
  );
};

export default PaymentCard ;
