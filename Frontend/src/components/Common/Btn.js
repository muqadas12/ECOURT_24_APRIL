import React, { Component } from 'react';
import { Col, Row, Button } from 'antd'
import { Link } from 'react-router-dom'
const BTN = ({ name, onClick }) => {
    return (
        <Col span={5}>
            <Button onClick={onClick} title="Add Judge" style={{ padding: "20%", boxShadow: "0px 1px 6px 1px rgba(0,0,0,0.34)", border: "none", color: "#0A2c2e", width: "90%", margin: "20px 0px" }} >
                {name}
            </Button>
        </Col>
    );
}

export default BTN;