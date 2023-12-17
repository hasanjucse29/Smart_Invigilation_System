import React, {Fragment} from 'react';
import {Button, Container, Row} from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Login(props) {
    const navigate = useNavigate();
    const asTeacher = ()=>{
        navigate('/ast');

    }
    const asCommittee = () =>{
        navigate('/committee');
    }


    return (
        <Fragment>
            <Container fluid="true" className="text-center mt-lg-5 loginComponent">
                <Row>
                    <div>
                        <Button className="loginBtn" onClick={asTeacher}>Login As Teacher</Button><br/>
                    </div>
                    <div>
                        <Button className="loginBtn" onClick={asCommittee}>Login As Committee</Button>
                    </div>
                </Row>
            </Container>
        </Fragment>
    );
}

export default Login;