import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import './Footer.css';

const Footer = () => {
    return (
        <div className="bg-dark text-light">
            <Container className="py-3">
                <Row>
                    <Col xs={12} md={3}>
                        <h4 className="niche-footer-title">Wagon</h4>
                        <p className="fs-6 mt-4">
                            But the best Apartment at best price. We never compromise with qulity. you'll get a awesome and good looking unit as you want. Buy an apartment now.
                        </p>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5 className="niche-footer-title">Quick Links</h5>
                        <ul className="mt-4 niche-footer-quick-links">
                            <li><HashLink to="/#" className="text-light">Home</HashLink></li>
                            <li><HashLink to="/#about-us" className="text-light">About Us</HashLink></li>
                            <li><HashLink to="/apartments" className="text-light">Apartments</HashLink></li>
                            <li><HashLink to="/#reviews" className="text-light">Reviews</HashLink></li>
                            <li><HashLink to="/#contact-us" className="text-light">Contact Us</HashLink></li>
                        </ul>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5 className="niche-footer-title">Contact Info</h5>
                        <div className="mt-4">
                            <p className="fs-6">
                                House#13, Block#5, New Landford Complex, Ulres, Dhaka <br />
                                Phone: +01234567 <br />
                                Email: support@example.com
                            </p>
                        </div>
                    </Col>
                    <Col xs={12} md={3}>
                        <h5 className="niche-footer-title">Newsletter</h5>
                        <div className="mt-4">
                            <p>
                                Get in touch with us for the best price.
                            </p>
                            <Form onSubmit={e => e.preventDefault()}>
                                <Form.Group controlId="newsletter-email">
                                    <Form.Control type="email" placeholder="Enter email" />
                                    <Button type="submit" variant="success" className="text-uppercase mt-2">Submit</Button>
                                </Form.Group>
                            </Form>
                        </div>
                    </Col>
                    {/* copyright message */}
                    <Col xs={12} as="p" className="text-center pt-2">
                        Copyright&copy;2022-2023 | Wagon
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;