import React, { useState } from 'react';
import { Row, Col } from 'antd'
import './Court.css'
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer';
const CaseProceeding = () => {
    const [caseNumber, setCaseNumber] = useState("")
    const [hearingDate, setHearingDate] = useState("")
    const [newDate, setNewDate] = useState("")

    const a = JSON.parse(localStorage.getItem('login'))
    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/hearingfind/findHearing',
            data: {
                caseNumber: caseNumber
            }
        }).then(res => {
            const { hearingDate } = res.data
            setHearingDate(hearingDate)
        }).catch(err => {
            alert("Case Not Found")
        });

    }
    return (
        <>
            <Navbar />

            <img class="casereportimg" style={{ height: "500px" }} src="https://cdn.hipwallpaper.com/m/94/27/reyNsw.jpg" alt="" /> <br /> <br /> <br />
            <h3 style={{ textAlign: "center" }}>Case Proceeding</h3> <br />
            <p class="alert alert-info">Please select the Case Type , enter the Case Number e.g. 1234 or 1234-K and enter the year e.g. 2015</p>
            <form class="form" onSubmit={handleSubmit} >
                <Row>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <label class="casenumber" htmlFor="casenumber">
                            Case Number
              <br />
                            <input value={caseNumber} onChange={e => setCaseNumber(e.target.value)} style={{ width: "170%", height: "40px", border: "0.1px solid black" }} type="text" placeholder="Case Number" />
                        </label>
                    </Col>
                    <Col lg={12} md={12} sm={24} xs={24}>
                        <label >Case Year <br />
                            <select style={{ width: "290%", height: "40px", border: "0.1px solid black" }} name="Year" id="Year"><option value="">Select Year</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option></select>
                        </label>
                    </Col>
                </Row>
                <button style={{ marginLeft: "45%", backgroundColor: "purple" }} class="btn py-2 px-5 ">Search</button> <br /><br />

            </form >


            <form style={{ marginLeft: "20%", marginTop: "5%" }}>
                <label style={{ display: "block" }} >Hearing Date :
              <input value={hearingDate} placeholder="Hearing Date" disabled class="form-3" style={{ marginLeft: "14%" }} type="text" />
                </label>

                <label style={{ display: "block" }} >Counsels :
              <input placeholder="Enter Councel" class="form-3" style={{ marginLeft: "16.2%" }} type="text" />
                </label>

                <label style={{ display: "block" }} >Case Status :
              <input value={hearingDate !== "" ? "Approved" : ""} placeholder="status" disabled class="form-3" style={{ marginLeft: "15%" }} type="text" />
                </label>

                <label style={{ display: "block" }} >Next Hearing Date :
              <input value={newDate} placeholder="Next Date" onChange={e => setNewDate(e.target.value)} class="form-3" style={{ marginLeft: "11.3%" }} type="date" />
                </label>
                <button style={{ marginLeft: "45%", backgroundColor: "purple" }} class="btn py-2 px-5 ">Update</button> <br /><br />

            </form>
            <Footer />

        </>
    );
}

export default CaseProceeding