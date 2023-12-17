import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

function Exam(props) {
    return (
        <Container className="mt-5">
            <h5>15 September 2023</h5>
            <Row>
                <Col md={4} sm={4} lg={4}>Course Code</Col>
                <Col md={4} sm={4} lg={4}> Course Name</Col>
                <Col md={4} sm={4} lg={4}>Exam Time</Col>
            </Row>
            <Row>
                <Col md={4} sm={4} lg={4}>CSE 314</Col>
                <Col md={4} sm={4} lg={4}> Computational Geometry</Col>
                <Col md={4} sm={4} lg={4}>12:00PM-3:00PM</Col>
            </Row>
        </Container>
    );
}

export default Exam;