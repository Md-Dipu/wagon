import React from 'react';
import { Link } from 'react-router-dom';
import { ListGroup } from 'react-bootstrap';
import './DashboardSideNav.css';
import useAuth from '../../../Hooks/useAuth';

const DashboardSideNav = ({ url, closeOffCanvas = () => { } }) => {
    const { admin } = useAuth();

    return (
        <ListGroup>
            <ListGroup.Item as={Link} to={url} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Dashboard</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/my-orders`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">My Orders</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/my-reviews`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">My Reviews</ListGroup.Item>
            <ListGroup.Item as={Link} to={`${url}/pay-now`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Pay Now</ListGroup.Item>

            {/* admin only links */}
            {admin && <>
                <ListGroup.Item as={Link} to={`${url}/manage-all-orders`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Manage All Orders</ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/add-a-product`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Add A Product</ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/manage-products`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Manage Products</ListGroup.Item>
                <ListGroup.Item as={Link} to={`${url}/make-admin`} onClick={closeOffCanvas} className="niche-dashboard-side-nav-item">Make Admin</ListGroup.Item>
            </>}
        </ListGroup>
    );
};

export default DashboardSideNav;