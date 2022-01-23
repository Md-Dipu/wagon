import React from 'react';
import { NavLink } from 'react-router-dom';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';

const DashboardTopNav = ({ showCanvas }) => {
    const [displayMobileMenu, setDisplayMobileMenu] = React.useState(false);
    const { deviceWidth } = useWindowDimensions();

    React.useEffect(() => {
        if (deviceWidth <= 991)
            setDisplayMobileMenu(true);
        else
            setDisplayMobileMenu(false);
    }, [deviceWidth]);

    return (
        <Navbar variant="light" bg="secondary">
            <Container fluid>
                {displayMobileMenu && <Button variant="outline-light me-2" onClick={showCanvas}>Menu</Button>}
                <Navbar.Brand as={NavLink} to="/" className="fw-bold">Wagon</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Button} className="rounded-pill text-uppercase text-white px-3">Logout</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
};

export default DashboardTopNav;