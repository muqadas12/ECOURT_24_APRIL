import React, { useState } from 'react';
import { Row, Col } from 'antd'
import './Court.css'
import axios from 'axios'
import Navbar from './Navbar';
import Footer from './Footer';
const CaseRecording = () => {
    const [caseNumber, setCaseNumber] = useState("")
    const [title, setTitle] = useState("")
    const [file, setFile] = useState("")
    const [date, setDate] = useState("")

    const a = JSON.parse(localStorage.getItem('login'))

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/cms/filing/findCase',
            data: {
                caseNumber: caseNumber
            }
        }).then(res => {
            const { title, date, caseFile } = res.data
            setTitle(title);
            setDate(date);
            setFile(caseFile);
        }).catch(err => {
            alert("Case Not Found")
        });

    }
    return (
        <>
            <Navbar />
            <img class="casereportimg" style={{ height: "500px" }} src="https://cdn.hipwallpaper.com/i/91/84/SldiEV.jpg" alt="" /> <br /> <br /> <br />

            {a && a.type === "Lawer" || a.type === "Judge" ? <>
                <h3 style={{ textAlign: "center" }}>Online Case Records</h3> <br />
                <p class="alert alert-info">Please select the Case Type , enter the Case Number e.g. 1234 or 1234-K and enter the year e.g. 2015</p>
                <form class="form" onSubmit={handleSubmit} >
                    <Row>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <label class="casenumber" htmlFor="casenumber">
                                Case Number
              <br />
                                <input
                                    onChange={(e) => setCaseNumber(e.target.value)}
                                    style={{ width: "170%", height: "40px", border: "0.1px solid black" }} type="text" placeholder="Case Number" />
                            </label>
                        </Col>
                        <Col lg={12} md={12} sm={24} xs={24}>
                            <label >Case Year <br />
                                <select style={{ width: "290%", height: "40px", border: "0.1px solid black" }} name="Year" id="Year"><option value="">Select Year</option><option value="2021">2021</option><option value="2020">2020</option><option value="2019">2019</option><option value="2018">2018</option><option value="2017">2017</option><option value="2016">2016</option><option value="2015">2015</option><option value="2014">2014</option><option value="2013">2013</option><option value="2012">2012</option><option value="2011">2011</option><option value="2010">2010</option><option value="2009">2009</option><option value="2008">2008</option><option value="2007">2007</option><option value="2006">2006</option><option value="2005">2005</option><option value="2004">2004</option><option value="2003">2003</option><option value="2002">2002</option><option value="2001">2001</option><option value="2000">2000</option><option value="1999">1999</option><option value="1998">1998</option><option value="1997">1997</option><option value="1996">1996</option><option value="1995">1995</option><option value="1994">1994</option><option value="1993">1993</option><option value="1992">1992</option><option value="1991">1991</option><option value="1990">1990</option><option value="1989">1989</option><option value="1988">1988</option><option value="1987">1987</option><option value="1986">1986</option><option value="1985">1985</option><option value="1984">1984</option><option value="1983">1983</option><option value="1982">1982</option><option value="1981">1981</option><option value="1980">1980</option></select>
                            </label>
                        </Col>
                    </Row>
                    <button class="btn">Search Result</button> <br /><br />

                </form>


                <p style={{ marginLeft: "17%" }}>Following Documents Are Avaliable For  Your Desire Case</p>

                <table style={{ width: "70%", marginLeft: "15%" }}>
                    <tr>
                        <th>Title</th>
                        <th>Document type</th>
                        <th>Download</th>
                        <th>Update Date</th>
                    </tr>
                    <tr colspan="2">
                        <td>{title !== "" ? title : "Judicial system of pakistan"}</td>
                        <td>Judicial system of pakistan</td>
                        <td  > <img onClick={() => {
                            var xhr = new XMLHttpRequest();
                            xhr.responseType = 'blob';
                            xhr.onload = (event) => {
                                var blob = xhr.response;
                            };
                            xhr.open('GET', file);
                            xhr.send();
                        }} style={{ width: "20%", cursor: "pointer" }} src="data:image/png;base64,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" alt="pdf-file" /> </td>
                        <td>{date !== "" ? date : "20 April 2020"}</td>
                    </tr>



                </table>
            </>
                : <h1 style={{ textAlign: "center" }}>Please Login First as a lawer</h1>}


            <Footer />
        </>
    );
}

export default CaseRecording;