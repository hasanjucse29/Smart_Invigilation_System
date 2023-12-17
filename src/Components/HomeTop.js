import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function HomeTop(props) {
    const navigate = useNavigate();

    const handleLoginBtn = () => {
        navigate( '/login');
    }

    const handleSignUpBtn = () => {
        navigate( '/signup');
    }

    return (
        <Container fluid="true" className="invigilation">
            <Row>
                <Col>
                    <div className="imgDiv">
                        <img src="https://govpoliju.com/assets/frontend/img/ju_logo.png" alt="ju logo"/>
                    </div>
                    <Button className="simpleBtn my-2" onClick={handleLoginBtn}>Log In</Button> <br/>
                    <Button className="simpleBtn my-2"onClick={handleSignUpBtn}>Sign Up</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default HomeTop;