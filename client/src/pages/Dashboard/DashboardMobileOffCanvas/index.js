import React from 'react';
import { Link } from 'react-router-dom';
import { Offcanvas } from 'react-bootstrap';
import DashboardSideNav from '../DashboardSideNav';

const DashBoardMobileOffCanvas = ({ show, handleClose, url }) => {
    return (
        <Offcanvas show={show} onHide={handleClose} className="bg-secondary">
            <Offcanvas.Header closeButton>
                <Offcanvas.Title as={Link} to="/" className="text-decoration-none text-white fw-bold fs-3">Wagon</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <DashboardSideNav
                    url={url}
                    closeOffCanvas={handleClose}
                />
            </Offcanvas.Body>
        </Offcanvas>
    );
};

export default DashBoardMobileOffCanvas;