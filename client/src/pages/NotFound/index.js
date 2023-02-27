import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'react-bootstrap';
import DarkNav from '../Shared/DarkNav';
import Footer from '../Shared/Footer';
import './NotFound.css';

const NotFound = () => {
    return (
        <>
            <DarkNav />
            <div className="niche-not-found-page">
                <div className="text-center">
                    <p className="display-3 fw-bold">404</p>
                    <p className="fs-3 fw-bold">Page Not Found</p>
                    <Button as={HashLink} to="/#" variant="light" size="lg" className="rounded-pill">Back to Home</Button>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default NotFound;