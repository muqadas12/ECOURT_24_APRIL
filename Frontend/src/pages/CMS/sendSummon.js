import React, { useState } from 'react';

import { Row, Col } from 'antd'
import axios from 'axios'
const SendSummon = (props) => {
    const [caseNumber, setCaseNumber] = useState("")
    const [title, setTitle] = useState("")
    const [judge, setJudge] = useState("")
    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [tehsil, setTehsil] = useState("")
    const [station, setStation] = useState("")
    const a = JSON.parse(localStorage.getItem('login'))
    const handleSearch = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/cms/findCase',
            data: {
                caseNumber: caseNumber
            }
        }).then(res => {
            const { title, name, address } = res.data
            setName(name)
            setTitle(title)
            setAddress(address)

        }).catch(err => {
            alert("Case Not Found")
        });

    }
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (caseNumber == "") {
            alert("Search Case First")
            return
        }
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/cms/addSummon',
            data: {
                name: name,
                judge: judge,
                address: address,
                date: Date(),
                caseNumber: caseNumber,
                tehsil: tehsil,
                status: "Pending",
                station: station,

            }
        }).then(res => {
            alert(`Your Summon has sent`)
        }).catch(err => {
            alert(err)
        });

    }
    return (
        <>
        
            <img style={{ width: "100%", height: "500px" }} src="https://cdn.hipwallpaper.com/i/31/65/7mj5qF.jpg" alt="" /> <br /><br />

            {a && a.type === "Admin" ?
                <>
                    <h3 style={{ textAlign: "center" }}>{props.location && props.location.state.check} E Summon</h3> <br />
                    <p class="alert alert-info">Please select the Case Type , enter the Case Number e.g. 12345</p> <br /><br />
                    <form class="form-2 " onSubmit={handleSearch}>
                        <Row justify="center">
                            <Col lg={8} md={8} sm={24} xs={24}>
                                <label >
                                    Case Number
              <br />
                                    <input onChange={(e) => setCaseNumber(e.target.value)} style={{ width: "170%", height: "40px", border: "0.1px solid black" }} type="text" placeholder="Case Number" />
                                </label>
                            </Col>
                            <Col style={{ marginTop: "20px" }} span={5}>
                                <button class="btn">Search status</button> <br /><br />

                            </Col>
                        </Row>

                    </form>


                    <h4 style={{ marginLeft: "20%" }}>Case Details</h4>

                    <form style={{ marginLeft: "20%" }} onSubmit={handleSubmit}>
                        <label style={{ display: "block", color: "darkgreen" }}  >Sommon Sent Date :
               <input disabled value={Date()} style={{ marginLeft: "10%", width: "20%" }} type="text" />
                        </label>

                        <label style={{ display: "block", color: "darkgreen" }} >Judge Name :
              <input value={judge} onChange={e => setJudge(e.target.value)} style={{ marginLeft: "13.5%", width: "20%" }} type="text" />
                        </label>

                        <label style={{ display: "block", color: "darkgreen" }} >Party Name :
               <input disabled value={name} style={{ marginLeft: "14%", width: "20%" }} type="text" />
                        </label>


                        <label style={{ display: "block", color: "darkgreen" }} >Adress :
               <input disabled value={address} style={{ marginLeft: "16.5%", width: "20%" }} type="text" />
                        </label>

                        <label style={{ display: "block", color: "darkgreen" }} >Tehsil :
               <input value={tehsil} onChange={e => setTehsil(e.target.value)} style={{ marginLeft: "17%", width: "20%" }} type="text" />
                        </label>

                        <label style={{ display: "block", color: "darkgreen" }} >Police Station :
               <input value={station} onChange={e => setStation(e.target.value)} style={{ marginLeft: "12.8%", width: "20%", width: "20%" }} type="text" />
                        </label>


                        {props.location && props.location.state.check === "Update" ?
                            <label style={{ display: "block", color: "darkgreen" }} >Police Station :
                <select style={{ marginLeft: "12.8%", width: "20%", width: "20%" }} >
                                    <option>Pending</option>
                                    <option>Completed</option>

                                </select> </label>

                            : <></>}

                        <button class="btn">{props.location.state.check} Summon</button> <br /><br />







                    </form>
                </>

                : <h1 style={{ marginBottom: "250px" }}>Login as Administrator</h1>}

           
        </>
    );
}

export default SendSummon;