import React, { useState, useEffect } from 'react';

import { Row, Col, Button, Radio, Modal, Input as Input2 } from 'antd'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Input from '../../components/Common/input';
import UploadCause from './uploadCause';
import BTN from "../../components/Common/Btn"



const Admin = (props) => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loginState, setLoginState] = useState(false)
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [isMessageModal, setIsMessageModal] = useState(false);

    useEffect(() => {
        if (localStorage.getItem('login')) {
            const a = JSON.parse(localStorage.getItem('login'))
            if (a.type === "Admin") {
                setLoginState(true)
            }
        }
    }, [props.history])

    const handleSubmit = async (e) => {
        e.preventDefault();
        axios({
            method: 'post',
            url: 'http://localhost:2000/api/cms/loginf/login',
            data: {
                email: email,
                password: password
            }
        }).then(res => {
            if (res.data !== "notFound") {
                localStorage.removeItem('login')
                localStorage.setItem('login', JSON.stringify(res.data))
                if (res.data.type === "Admin") {
                    setLoginState(true)
                } else
                    props.history.push('/')

            } else (alert("Email or Password is incorrect"))
        }).catch(err => {
            alert(err)
        });

    }
    const handleOk = () => {
        setIsModalVisible(false);
        setIsMessageModal(false);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
        setIsMessageModal(false)
    };
    const showModal = () => {
        setIsModalVisible(true);
    };
    return (
        <>
            <div>
             
                <Modal title="Upload Cause List" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                    <UploadCause />
                </Modal>
                <Modal title="Upload Cause List" visible={isMessageModal} onOk={handleOk} onCancel={handleCancel}>
                    <form onSubmit={handleSubmit}>
                        <Input
                            type='text'
                            placeholder='Email'
                            name='email'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        // error={errors.username}
                        />
                        <Input2.TextArea
                            placeholder='message'
                            name='message'
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        // error={errors.password}
                        />


                        <button
                            style={{ marginTop: "20px" }}
                            // disabled={this.validate() || isProcessing}
                            onClick={(e) => {
                                e.preventDefault();
                                alert("Message Will be sent to email after joining mail smtp")
                                setIsMessageModal(false)
                            }}
                            className='login-btn continue-to-shipping'
                        >
                            Login
                                </button>
                    </form>
                </Modal>
                {loginState == false ? <div style={{ marginTop: "50px" }}>
                    <div className='login-page'>
                        <div className='row'>
                            <div className='col-md-3'></div>

                            <div className='col-md-6 login-page-form'>
                                <h1>Login</h1>

                                <form onSubmit={handleSubmit}>
                                    <Input
                                        type='text'
                                        placeholder='Username'
                                        name='username'
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    // error={errors.username}
                                    />
                                    <Input
                                        type='password'
                                        placeholder='Password'
                                        name='password'
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    // error={errors.password}
                                    />
                                    <Row>
                                        <Col span={8}>
                                            <Radio >Admin</Radio>
                                        </Col>
                                        <Col span={8}>
                                            <Radio >Lawer</Radio>
                                        </Col>
                                        <Col span={8}>
                                            <Radio >Judge</Radio>
                                        </Col>
                                    </Row>


                                    <button
                                        // disabled={this.validate() || isProcessing}
                                        className='login-btn continue-to-shipping'
                                    >
                                        Login
                                </button>
                                </form>
                            </div>

                            <div className='col-md-3'></div>
                        </div>
                    </div>
                </div> : <div>

                        <Row justify="center" style={{ margin: "100px 0px 150px 0px" }}>
                            <BTN name="Add Judge" onClick={() => {
                                props.history.push({ pathname: "/register", state: { name: "Judge" } })

                            }} />
                            <BTN name="Add Lawer" onClick={() => {
                                props.history.push({ pathname: "/register", state: { name: "Lawer" } })

                            }} />
                            <BTN name="Update Summon" onClick={() => {
                                props.history.push({ pathname: "/sendsummon", state: { check: "Update" } })

                            }} />
                            <BTN name="Upload Documents" />
                            <BTN name="Upload Cause List" onClick={showModal} />
                            <BTN name="Update Case Record" />
                            <BTN name="Send Summon" onClick={() => {
                                props.history.push({ pathname: "/sendsummon", state: { check: "Send" } })

                            }} />
                            <BTN name="Sent Message" onClick={() => setIsMessageModal(true)} />


                        </Row>

                    </div>
                }

               </div>
        </>
    );
}

export default Admin;