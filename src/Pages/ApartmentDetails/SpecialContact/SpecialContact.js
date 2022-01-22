import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { HashLink } from 'react-router-hash-link';

const SpecialContact = () => {
    return (
        <Container className="my-4">
            <Row className="align-items-center">
                <Col xs={12} md={6}>
                    <h3>Get a Spacial Rate</h3>
                    <p className="text-secondary pe-md-5">We always like to provide you with the best price. Contact us and get the best deal for you. And also report us about the problem you face for us. Our Support team is always ready to help you. Best apartments with the best deal waiting for you.</p>
                    <Button as={HashLink} to="/#contact-us" variant="outline-secondary" size="lg" className="rounded-pill text-uppercase">Contact now</Button>
                </Col>
                <Col xs={12} md={6}>
                    <div className="border rounded my-3 px-4 py-3">
                        <h4>Best Qualities</h4>
                        <p className="fs-6 mb-0">Find the best apartment and buy from well-known builders. Our buildings are qualified made with the best engineers. I hope you you will be happy about this.</p>
                    </div>
                    <div className="border rounded my-3 px-4 py-3">
                        <h4>24/7 Support</h4>
                        <p className="fs-6 mb-0">Our support team is always ready to support you with experience stuff. Facing a problem don't waste your time just write your message and send it to us.</p>
                    </div>
                    <div className="border rounded my-3 px-4 py-3">
                        <h4>Locations</h4>
                        <p className="fs-6 mb-0">If you're searching for an apartment with the best location you should watch ours. We have a lot of as you want. We have every location that you like.</p>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default SpecialContact;