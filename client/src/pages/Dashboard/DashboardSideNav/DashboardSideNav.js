import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './DashboardSideNav.css';
import useAuth from '../../../hooks/useAuth';

const DashboardSideNav = ({ url, closeOffCanvas = () => { } }) => {
    const { admin } = useAuth();

    return (
        <ListGroup>
            <ListGroup.Item as={Link} to={url} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Dashboard</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/my-bookings`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">My Bookings</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/my-review`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">My Review</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/pay-now`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Pay Now</ListGroup.Item>

            {/* admin only links */}
            {admin && <>
                <ListGroup.Item as={Link} to={`${url}/manage-all-booking`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Manage All Booking</ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/add-a-apartment`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Add a Apartment</ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/manage-apartments`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Manage Apartments</ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/make-admin`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Make Admin</ListGroup.Item>
            </>}
        </ListGroup>
    );
};

export default DashboardSideNav;