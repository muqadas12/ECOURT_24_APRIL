import React, { Component } from "react";
import { MDBNotification } from "mdbreact";

const Noti = (props) => {
  return (
    <MDBNotification
      autohide={3000} // by default = ∞ ms
      bodyClassName="p-5 font-weight-bold white-text"
      className="stylish-color-dark"
      closeClassName="blue-grey-text"
      fade
      icon="bell"
      iconClassName="blue-grey-text"
      message={props.message}
      show
      text="11 mins ago"
      title="Notification "
      titleClassName="elegant-color-dark white-text"
    />
  );
};

export default Noti;
