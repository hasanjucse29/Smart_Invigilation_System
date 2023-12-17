import React from 'react';
import {Container, Row} from "react-bootstrap";

function GlobalNav(props) {
    return (
        <Container fluid="true" className="text-center">
            <Row>
                <h4 className="title">Smart Invigilation System</h4>
            </Row>
        </Container>
    );
}

export default GlobalNav;