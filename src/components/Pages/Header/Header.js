import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';

import './Header.css'


const Header = () => {
    return (
        <div>
            <Navbar bg="light" expand="lg">
                <Container>
                    <Navbar.Brand to="/home">BD MOBILE MART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link to="/home">Home</Nav.Link>
                            <Nav.Link to="/link">Link</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link to='/login'>
                                Login
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;