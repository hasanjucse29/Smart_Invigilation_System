import React from 'react';
import {Button, Container, Form} from "react-bootstrap";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function SignUp(props) {
    const navigate = useNavigate();
    const Submit = () => {
       
        navigate('/login');
    }
    
    return (
        <Container>
            <Form>
                <h4>Create Account</h4>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Enter name" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Email</Form.Label>
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control type="tel" placeholder="Enter phone number" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="I agree to the terms and conditions" />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={Submit}>Submit</Button>
            </Form>
        </Container>
    );
}

export default SignUp;