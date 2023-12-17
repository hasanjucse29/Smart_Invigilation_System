import React from 'react';
import {Button, Container, Row} from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
function LoginComponent(props) {
    const navigate = useNavigate();
    const HandleCommitteeLogin = () => {
        navigate('/committeeprofile');
    }
    return (
        <Container className="loginContainer">
            <Row>
                <div className="formDiv" >
                    <form action="">
                        <div className="form-group formDIv1">
                            <label htmlFor="">Email</label>
                            <input className="form-control" type="text"/>
                        </div>
                        <div className="form-group formDIv2">
                            <label htmlFor="">Password</label>
                            <input className="form-control" type="password"/>
                        </div>
                        <div>
                            <a href="">Forgot Password</a>
                        </div>
                        <div>
                            <Button onClick={HandleCommitteeLogin} >Log In</Button>
                        </div>
                    </form>
                </div>
            </Row>
        </Container>
    );
}

export default LoginComponent;
