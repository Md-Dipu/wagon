import React from 'react';
import { Container } from 'react-bootstrap';
import './DetailsBanner.css';

const DetailsBanner = props => {
    const { title, text } = props;
    return (
        <div className="niche-details-banner d-flex justify-content-center align-items-center">
            <Container className="text-center text-light">
                <p className="display-4">{title}</p>
                <p className="fs-5">{text}</p>
            </Container>
        </div>
    );
};

export default DetailsBanner;