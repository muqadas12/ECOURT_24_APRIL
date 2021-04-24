import React from "react";
// import CourtLogo from "../assets/Images/logo_web.jpg";
import CourtLogo from "../../../assets/Images/logo_web.jpg"
import "./Logo.css";

const logo = props => (
  <div className="Logo">
    <img src={CourtLogo} alt="My logo" />
  </div>
);
export default logo;
