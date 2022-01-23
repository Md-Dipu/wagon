import React from 'react';
import { NavLink } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar variant="dark" expand="lg" className="niche-navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">Wagon</Navbar.Brand>
                <Navbar.Toggle aria-controls="niche-navbar-nav" />
                <Navbar.Collapse id="niche-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} exact to="/" className="fw-bold">Home</Nav.Link>
                        <Nav.Link as={HashLink} to="/#about-us" className="fw-bold">About Us</Nav.Link>
                        <Nav.Link as={NavLink} exact to="/apartments" className="fw-bold">Apartments</Nav.Link>
                        <Nav.Link as={HashLink} to="/#reviews" className="fw-bold">Reviews</Nav.Link>
                        <Nav.Link as={HashLink} to="/#contact-us" className="fw-bold">Contact Us</Nav.Link>
                    </Nav>
                    <div>
                        <Button as={NavLink} to="/login" variant="light" className="rounded-pill niche-nav-btn">Login</Button>{" "}
                        <Button as={NavLink} to="/register" variant="light" className="rounded-pill niche-nav-btn">Registion</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;