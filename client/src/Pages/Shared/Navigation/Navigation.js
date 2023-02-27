import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignInAlt, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import useAuth from '../../../hooks/useAuth';
import './Navigation.css';

const Navigation = () => {
    const { user, logOut } = useAuth();

    const location = useLocation();
    const passRedirectLocation = () => {
        if (location.pathname === '/login' || location.pathname === '/register') {
            return location.state.from;
        }
        return location;
    }

    return (
        <Navbar variant="dark" expand="lg" className="niche-navbar">
            <Container>
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">Wagon</Navbar.Brand>
                <Navbar.Toggle aria-controls="niche-navbar-nav" />
                <Navbar.Collapse id="niche-navbar-nav">
                    <Nav className="mx-auto">
                        <Nav.Link as={NavLink} exact to="/" className="fw-bold">Home</Nav.Link>
                        {user && <Nav.Link as={NavLink} exact to="/dashboard" className="fw-bold">Dashboard</Nav.Link>}
                        <Nav.Link as={NavLink} exact to="/apartments" className="fw-bold">Apartments</Nav.Link>
                        <Nav.Link as={HashLink} to="/#about-us" className="fw-bold">About Us</Nav.Link>
                        <Nav.Link as={HashLink} to="/#reviews" className="fw-bold">Reviews</Nav.Link>
                        <Nav.Link as={HashLink} to="/#contact-us" className="fw-bold">Contact Us</Nav.Link>
                    </Nav>
                    {!user && <div>
                        <Button
                            as={NavLink}
                            to={{
                                pathname: "/login",
                                state: { from: passRedirectLocation() }
                            }}
                            variant="light"
                            className="rounded-pill niche-nav-btn"
                        >
                            <FontAwesomeIcon icon={faSignInAlt} /> Login
                        </Button>{" "}
                        <Button
                            as={NavLink}
                            to={{
                                pathname: "/register",
                                state: { from: passRedirectLocation() }
                            }}
                            variant="light"
                            className="rounded-pill niche-nav-btn"
                        >
                            Registion
                        </Button>
                    </div>}
                    {user && <Button variant="success" onClick={logOut} className="rounded-pill"><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Button>}
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Navigation;