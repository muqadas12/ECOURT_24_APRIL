import React, { Component } from 'react';
import { FormErrors } from "../../components/FormErrors"
import CoveringCard from "../../shared/UIElements/CoveringCard"

import {Col,Row} from "react-bootstrap"
import axios from "axios"
import Left from "../../components/LeftNotification"
import Right from "../../components/RightNotification"


class LoginNotification extends Component {
  

  render (props) {
    return (
      <div>
      <Row className="landinglogin-page">
      <Col><Left/></Col>
      <Col><Right/></Col>

      </Row>

      


      </div>
      
    )
  }
}

export default LoginNotification;







