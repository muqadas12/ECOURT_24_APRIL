

import React, { Component } from 'react';

import {Col,Row} from "react-bootstrap"
import Left from "../../components/cmsL"
import Right from "../../components/cmsR"


class AdminLogin extends Component {
  

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

export default AdminLogin;











