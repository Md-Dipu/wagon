import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Apartment from '../../Shared/Apartment/Apartment';

const ApartmentsContainer = ({ apartments }) => {
    return (
        <Container className="my-4">
            <Row className="g-4">
                {apartments.map(apartment =>
                    <Col xs={12} md={6} lg={4} key={apartment._id}>
                        <Apartment apartment={apartment} />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default ApartmentsContainer;