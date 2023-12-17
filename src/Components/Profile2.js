import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";
import Exam from "./Exam";
import Routine from "./Routine";
import RoutineNav from "./RoutineNav";
import { Navigate } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Profile(props) {

    const navigate = useNavigate();

    const ManageInvigilation = () => {
        navigate( '/manageinvigilation');
    }

    return (
        <Container fluid="true" className="profileContainer">
            <Row>
                <Col md={3} lg={3} sm={3}  className="pBackground">
                    <div className="profile">
                        <img src="https://th.bing.com/th/id/R.7a9cd7efae2304ed15791711d5074dbe?rik=GmJN2Z1SUHASVw&riu=http%3a%2f%2fshmector.com%2f_ph%2f18%2f749226765.png&ehk=Z9q6yIHt%2bquTmt5kOepHEm48op2QLTkxnatrUH0RpGo%3d&risl=&pid=ImgRaw&r=0" alt=""/>
                        <h4>Shorif Uddin</h4>
                        <div className="btnDIv">
                            <Button>Manage Routine</Button>
                            <Button onClick={ManageInvigilation}>Manage Invigilation</Button>
                        </div>
                    </div>
                </Col>
                <Col md={9} lg={9} sm={9}>
                    <RoutineNav/>
                    <Routine/>
                    <Routine/>
                    <Routine/>

                </Col>
            </Row>
        </Container>
    );
}

export default Profile;