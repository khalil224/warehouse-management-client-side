import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './Header.css'


const Header = () => {
    return (
        <div className='fw-bold'>
            <Navbar fixed='top' bg="dark" variant='dark' expand="lg" className='navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/home">BD MOBILE MART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fs-5">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className='fs-5'>
                            <Nav.Link as={Link} to='/login'>
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