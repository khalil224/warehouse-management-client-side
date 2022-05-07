import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

import './Header.css'


const Header = () => {

    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth)
    }

    return (
        <div className='fw-bold '>
            <Navbar fixed='top' bg="dark" variant='dark' expand="lg" className='navbar'>
                <Container>
                    <Navbar.Brand as={Link} to="/home">BD MOBILE MART</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto fs-5">
                            <Nav.Link as={Link} to="/home">Home</Nav.Link>
                            <Nav.Link href="home#products">Products</Nav.Link>
                            <Nav.Link as={Link} to="/blogs">Blogs</Nav.Link>
                        </Nav>
                        <Nav className='fs-5'>

                            {
                                user ?
                                    <span className='d-flex py-2'> <Nav.Link as={Link} to="/manageproduct">Manage Products</Nav.Link>  <Nav.Link as={Link} to="/addproduct">Add Product</Nav.Link> <Nav.Link as={Link} to="/myproduct">My Products</Nav.Link>
                                        <button className='btn btn-link text-secondary text-decoration-none fs-5 fw-bold' onClick={handleSignOut}>Logout</button></span>
                                    :

                                    <Nav.Link as={Link} to='/login'>
                                        Login
                                    </Nav.Link>}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;