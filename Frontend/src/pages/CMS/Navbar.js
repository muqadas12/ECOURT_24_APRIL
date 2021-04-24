import React from 'react'
import './Court.css'
import { Row, Col, Input } from 'antd'
import { Link } from 'react-router-dom'
function Navbar() {
  const a = JSON.parse(localStorage.getItem('login'))
  return (
    <>
      <Row>
        <Col span={20}>
          <img class="courtlogo" style={{ display: "inline" }} src="https://jobzalert.pk/uploads/co_img/1609415773.jpg" alt="#" />

        </Col>
        <Col span={4}>
          <Row style={{ marginTop: "50px" }}>
            <Col span={24}>

              <form >
                <Input.Search style={{ color: "black" }} placeholder="input search text" enterButton />
              </form>
            </Col>
            {a ?
              <Col style={{ marginTop: "20px" }} span={24}>
                <span onClick={() => {
                  localStorage.removeItem('login')
                  window.location.reload()
                }} style={{ color: "black", cursor: "pointer" }} ><span >Logut as {a.type} <i style={{ color: "black" }} class="fas fa-sign-out-alt"></i></span></span>

              </Col>
              :


              <Col style={{ marginTop: "20px" }} span={24}>
                <Link style={{ color: "black" }} to="admin"><span >Login  <i style={{ color: "black" }} class="fas fa-sign-out-alt"></i></span></Link>

              </Col>}


          </Row>

        </Col>
      </Row>



      <div class="navbar navbar-expand-md   ">
        <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#button">
          <span class="navbar-collapse-icon"></span>
        </button>

        <div class="collapse navbar-collapse " id="button">
          <ul class="navbar-nav">
            <li class="nav-item ">
              <Link to="/admin" class="nav-link"> Admin</Link>
            </li>

            <li class="nav-item">
              <Link href="navbutton" class="nav-link  dropdown-toggle" data-toggle="dropdown" > Lawyer Dashboard </Link>
              <ul style={{ marginLeft: "19%" }} class="dropdown-menu">
                <li> <Link to="/fileCase" class="dropdown-item" href="#"> File Online Case </Link> </li>
                <li> <Link to="/caseRecording" class="dropdown-item" href="#"> Search Case </Link> </li>
                {/* <li> <Link class="dropdown-item" href="#"> View Cause Status </Link> </li> */}
                <li> <Link to="/causeList" class="dropdown-item" href="#"> View Cause List </Link> </li>
              </ul>
            </li>

            <li class="nav-item">
              <span style={{ cursor: "pointer" }} class="nav-link dropdown-toggle " data-toggle="dropdown"> Judge Dashboard </span>

              <ul style={{ marginLeft: "32%" }} class="dropdown-menu">
                <li> <Link to="/caseRecording" class="dropdown-item" href="#">Case Record</Link> </li>
                <li> <Link to="/esummon" class="dropdown-item" href="#">E summon Status</Link> </li>

                <li> <Link to="/filingCase" class="dropdown-item" style={{ border: "none" }} href="#"> E filing Status</Link>
                  <li> <Link to="/caseProceeding" class="dropdown-item" href="#">Case Proceeding</Link> </li>

                </li>
              </ul>
            </li>

            <li class="nav-item">
              <Link href="#" class="nav-link"> E Filing of a Case</Link>
            </li>
            <li class="nav-item">
              <Link href="#" class="nav-link"> Case Processidings</Link>
            </li>
            <li class="nav-item">
              <Link href="#" class="nav-link"> Case Referral</Link>
            </li>
            <li class="nav-item">
              <Link href="#" class="nav-link"> Public Services</Link>
            </li>
            <li class="nav-item">
              <Link href="#" class="nav-link"> staticts and reports</Link>
            </li>

          </ul>

        </div>

      </div>












    </>
  )
}

export default Navbar;