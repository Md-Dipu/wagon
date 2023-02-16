import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className="niche-home-banner d-flex justify-content-center align-items-center">
            <div className="text-white text-center">
                <h1 className="niche-home-banner-title">
                    Awesome Apartments <br />
                    are waiting for you.
                </h1>
                <Button as={Link} to="/apartments" variant="primary" className="rounded-pill niche-home-banner-btn">Book One Now</Button>{" "}
                <Button as={HashLink} to="/#contact-us" variant="outline-light" className="rounded-pill niche-home-banner-btn">Contact Us</Button>
            </div>
        </div>
    );
};

export default HomeBanner;