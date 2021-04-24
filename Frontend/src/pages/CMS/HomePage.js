import React from 'react'
import Navbar from './Navbar'
import { Col, Row } from 'antd'
import './Court.css'
import Footer from './Footer';
function HomePage() {
  return (
    <>
      <Navbar />

      <div>

        <img style={{ width: "100%", height: "250px" }} src="https://fedsoc-cms-public.s3.amazonaws.com/gavel%20and%20scales.jpg-848x477-712x251" alt="img" />



        <div class="homepagebtn">
          <Row justify="center">
            <Col className="mx-auto" lg={4} md={22} sm={24} xs={24} >
              <img class=" btn img-top" src="https://www.supremecourt.gov.pk/wp-content/uploads/2019/07/online-case-dropshadow3.png" alt="Card Front"></img>
            </Col>
            <Col className="mx-auto" lg={4} md={22} sm={24} xs={24} >
              <img class=" btn img-top" src="https://www.supremecourt.gov.pk/wp-content/uploads/2019/07/judgement-search-dropshadow3.png" alt="Card Front"></img>
            </Col>
            <Col className="mx-auto" lg={4} md={22} sm={24} xs={24}>
              <img class=" btn img-top" src="https://www.supremecourt.gov.pk/wp-content/uploads/2019/07/cause-list-dropshadow3.png" alt="Card Front"></img>
            </Col>
            <Col className="mx-auto" lg={4} md={22} sm={24} xs={24}>
              <img class=" btn img-top" src="https://www.supremecourt.gov.pk/wp-content/uploads/2019/10/latest-judgements-rollover2.png" alt="Latest Judgement"></img>
            </Col>
            <Col className="mx-auto" lg={4} md={22} sm={24} xs={24}>
              <img class=" btn img-top" src="https://www.supremecourt.gov.pk/wp-content/uploads/2019/11/roster-of-sittings-1-rollover-v2.png" alt="Card Front"></img>
            </Col>
          </Row>
        </div>

        <Footer />


      </div></>
  )
}

export default HomePage;
