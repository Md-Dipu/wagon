import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Container, Col, Form, Row } from 'react-bootstrap';

const HomeContact = () => {
    return (
        <div id="contact-us" className="py-5">
            <Container>
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} sm={10} md={6} lg={5}>
                        <form className="form-dark text-center rounded shadow p-4">
                            <h5 className="text-uppercase mb-3">Contact Us</h5>
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                className="mb-3"
                            />
                            <Form.Control
                                type="email"
                                placeholder="Email"
                                className="mb-3"
                            />
                            <Form.Control
                                as="textarea"
                                placeholder="Message"
                                className="mb-3"
                                rows={5}
                            />
                            <Button variant="light">Cancel</Button>{" "}
                            <Button type="submit">Send</Button>
                        </form>
                    </Col>
                    <Col xs={12} sm={10} md={6} lg={5} className="mt-md-0 mt-4">
                        <h5>Support</h5>
                        <p className="fs-6">Our support team always ready to help you. So, don't waste your time with problems. Just send a message and our team will to solve the problem. Enjoy you service.</p>
                        <Button
                            variant="outline-secondary"
                            as={Link}
                            to="/apartments"
                            className="rounded-pill"
                        >
                            Buy One Now
                        </Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default HomeContact;