import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';

function RoutineNav() {
    return (
        <>
            <Navbar collapseOnSelect expand="lg" bg="white" variant="white">

                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="#features">CSE 27</Nav.Link>
                        <Nav.Link href="#pricing">CSE 28</Nav.Link>
                        <Nav.Link href="#pricing">CSE 29</Nav.Link>
                        <Nav.Link href="#pricing">CSE 30</Nav.Link>
                        <Nav.Link href="#pricing">CSE 31</Nav.Link>

                    </Nav>

                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default RoutineNav;
