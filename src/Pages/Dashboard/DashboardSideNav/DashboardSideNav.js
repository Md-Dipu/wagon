import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './DashboardSideNav.css';

const DashboardSideNav = ({ url, closeOffCanvas = () => { } }) => {
    return (
        <ListGroup>
            <ListGroup.Item as={Link} to={url} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Dashboard</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/my-orders`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">My Orders</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/my-reviews`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">My Reviews</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/pay-now`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Pay Now</ListGroup.Item>
        </ListGroup>
    );
};

export default DashboardSideNav;