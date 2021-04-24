import React, { useState } from 'react';
import './Court.css'
import axios from 'axios'
import { Row, Col } from 'antd'
import Navbar from './Navbar';
import Footer from './Footer';
const Esummon = (props) => {
    const [caseNumber, setCaseNumber] = useState("")

    const [judge, setJudge] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [tehsil, setTehsil] = useState("")
    const [station, setStation] = useState("")
    const [date, setDate] = useState("")
    const [status, setStatus] = useState("")
    const a = JSON.parse(localStorage.getItem('login'))
    const handleSearch = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/cms/summon/findSummon',
            data: {
                caseNumber: caseNumber
            }
        }).then(res => {
            const { name, judge, address, tehsil, status, date, station } = res.data
            setName(name)
            setJudge(judge);
            setAddress(address)
            setTehsil(tehsil)
            setStation(station)
            setStatus(status)
            setDate(date)

        }).catch(err => {
            alert("Summon Not Found")
        });

    }
    return (
        <>
            <img style={{ width: "100%", height: "500px" }} src="https://cdn.hipwallpaper.com/i/31/65/7mj5qF.jpg" alt="" /> <br /><br />

            {a && a.type === "Judge" ?
                <>
                    <h3 style={{ textAlign: "center" }}>E Summon Status</h3> <br />
                    <p class="alert alert-info">Please select the Case Type , enter the Case Number e.g. 1234 or 1234-K and enter the year e.g. 2015</p> <br /><br />
                    <form class="form-2 " onSubmit={handleSearch}>
                        <Row>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <label >
                                    Case Number
              <br />
                                    <input onChange={e => setCaseNumber(e.target.value)} style={{ width: "170%", height: "40px", border: "0.1px solid black" }} type="text" placeholder="Case Number" />
                                </label>
                            </Col>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <label >Case Year <br />
                                    <select style={{ width: "310%", height: "40px", border: "0.1px solid black" }} name="Year" id="Year"><option value="">Select Year</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option></select>
                                </label>
                            </Col>
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <label >Court Number
                <input style={{ width: "110%", height: "40px", border: "0.1px solid black" }} type="text" placeholder="Court Number" />

                                </label>
                            </Col>
                        </Row>
                        <button class="btn">Search status</button> <br /><br />

                    </form>


                    <h4 style={{ marginLeft: "20%" }}>Summon Details</h4>

                    <form style={{ marginLeft: "20%" }}>
                        <div class="block">
                            <label style={{ display: "inline-block", width: "140px", textAlign: "right" }}  >Sommon Sent Date : </label>
                            <input placeholder="Date" value={date} disabled style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </div>
                        <div class="block">
                            <label style={{ display: "inline-block", width: "140px", textAlign: "right" }} >Judge Name :</label>
                            <input placeholder="Judge Name" value={judge} disabled style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </div>

                        <div class="block">
                            <label style={{ display: "inline-block", width: "140px", textAlign: "right" }} >Party Name :</label>
                            <input placeholder="Party Name" value={name} disabled style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </div>


                        <div class="block">
                            <label style={{ display: "inline-block", width: "140px", textAlign: "right" }} >Address :</label>
                            <input placeholder="Address" value={address} disabled style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </div>

                        <div class="block">
                            <label style={{ display: "inline-block", width: "140px", textAlign: "right" }} >Tehsil :</label>
                            <input placeholder="Tehsil" value={tehsil} disabled style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </div>

                        <div class="block">
                            <label style={{ display: "inline-block", width: "140px", textAlign: "right" }} >Police Station :</label>
                            <input placeholder="Police Station" value={station} disabled style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </div>

                        <label style={{ display: "block" }} > <h4>Current Status :
               <input placeholder="Status" value={status} style={{ marginLeft: "7.3%", color: "green", textAlign: "center", width: "20%", width: "20%" }} type="text" />
                        </h4>
                        </label>
                    </form>
                    <button onClick={() => alert("Warrant Issued")} class="btn">Issue a Warrant</button> <br /><br />


                </>

                : <h1 style={{ textAlign: "center", marginBottom: "150px" }}> Please Login as a Judge</h1>}

        </>
    );
}

export default Esummon;