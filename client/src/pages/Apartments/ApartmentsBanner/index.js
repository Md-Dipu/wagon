import React from 'react';
import { Container } from 'react-bootstrap';
import './ApartmentsBanner.css';

const ApartmentsBanner = ({ title, text }) => {
    return (
        <div className="niche-apartments-banner d-flex justify-content-center align-items-center">
            <Container className="text-center" style={{ color: '#cbcbcb' }}>
                <p className="display-4">{title}</p>
                <p className="fs-4">{text}</p>
            </Container>
        </div>
    );
};

export default ApartmentsBanner;