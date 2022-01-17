import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import './Navigation.css';

const Navigation = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container>
                <Navbar.Brand as={NavLink} to="/">Wagon</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} to="/">Home</Nav.Link>
                        <Nav.Link as={NavLink} to="/about-us">About Us</Nav.Link>
                        <Nav.Link as={NavLink} to="/units">Units</Nav.Link>
                        <Nav.Link as={NavLink} to="/reviews">Reviews</Nav.Link>
                        <Nav.Link as={NavLink} to="/contact-us">Contact Us</Nav.Link>
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