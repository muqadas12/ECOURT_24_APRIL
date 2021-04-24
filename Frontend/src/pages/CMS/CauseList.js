import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd'
import Navbar from './Navbar';
import Footer from './Footer';
import Calendar from 'react-calendar';
import axios from 'axios'
// import 'react-calendar/dist/Calendar.css';

const CauseList = () => {
    const [value, onChange] = useState(new Date());
    const [data, setData] = useState([])

    useEffect(() => {
        setData([])
        const handleSubmit = async () => {
            const a = value.getFullYear() + "-" + ((value.getMonth() + 1) < 10 ? "0" + (value.getMonth() + 1) : (value.getMonth() + 1)) + "-" + (value.getDate() < 10 ? "0" + value.getDate() : value.getDate())
            // alert(a)
            axios({
                method: 'post',
                url: 'http://localhost:2000/api/cms/cause/findCause',
                data: {
                    date: a
                }
            }).then(res => {
                setData(res.data)
                console.log(res.data)
            }).catch(err => {
                // alert("Case Not Found")
            });

        }
        handleSubmit()
    }, [value])

    return (
        <>
            <div>
                <Row>
                    <Col span={14}>
                        <h1>Cause Lists</h1>

                        {data.length > 0 && data.map(d => {
                            return <Col>

                                <Row style={{ height: "100px", border: "1px solid black", width: "75%" }}>
                                    <Col style={{ borderRight: "1px black solid" }} span={4}>
                                        <img onClick={() => {
                                            var xhr = new XMLHttpRequest();
                                            xhr.responseType = 'blob';
                                            xhr.onload = (event) => {
                                                var blob = xhr.response;
                                            };
                                            xhr.open('GET', d.causeFile);
                                            xhr.send();
                                        }} style={{ maxWidth: "100%", cursor: "pointer" }} src="data:image/png;base64,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" alt="pdf-file" />
                                    </Col>
                                    <Col style={{ borderRight: "1px solid black" }} span={14}>
                                        <h1 style={{ fontFamily: "calibri" }}>{d.title}</h1>
                                        <h4 style={{ fontSize: "12px", marginTop: "0px" }}>Hearing Date: {d.date}</h4>
                                    </Col>
                                    <Col span={6}>
                                        <button onClick={() => {
                                            var xhr = new XMLHttpRequest();
                                            xhr.responseType = 'blob';
                                            xhr.onload = (event) => {
                                                var blob = xhr.response;
                                            };
                                            xhr.open('GET', d.causeFile);
                                            xhr.send();
                                        }} className="btn btn-secondary">Download</button>
                                    </Col>
                                </Row>
                            </Col>
                        })}

                    </Col>
                    <Col span={10}>
                        <Calendar
                            onChange={onChange}
                            value={value}
                        />

                    </Col>
                </Row>
            </div>
        </>
    );
}

export default CauseList;