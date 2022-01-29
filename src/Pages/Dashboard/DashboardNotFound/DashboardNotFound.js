import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button } from 'react-bootstrap';

const DashboardNotFound = ({ linkText, url }) => {
    return (
        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%' }}>
            <div className="text-center">
                <p className="display-3 fw-bold">404</p>
                <p className="fs-3 fw-bold">Page Not Found</p>
                <Button as={HashLink} to={url} variant="light" size="lg" className="rounded-pill">{linkText}</Button>
            </div>
        </div>
    );
};

export default DashboardNotFound;