import React from 'react';
import { NavLink } from 'react-router-dom';
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
                        <Nav.Link as={NavLink} to="/" className="fw-bold">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us" className="fw-bold">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/units" className="fw-bold">Units</Nav.Link>
                        <Nav.Link as={NavLink} to="/reviews" className="fw-bold">Reviews</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact-us" className="fw-bold">Contact Us</Nav.Link>
                    </Nav>
                    <div>
                        <Button as={NavLink} to="/login" variant="light" className="rounded-pill niche-nav-btn">Login</Button>{" "}
                        <Button as={NavLink} to="/registion" variant="light" className="rounded-pill niche-nav-btn">Registion</Button>
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;