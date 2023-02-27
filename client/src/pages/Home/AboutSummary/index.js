import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Image, Row } from 'react-bootstrap';

const AboutSummary = () => {
    return (
        <Container className="py-4" id="about-us">
            <Row className="justify-content-center align-items-center">
                <Col xs={12} md={4}>
                    <Image src="https://i.ibb.co/FxvLr1n/home-about.jpg" fluid />
                </Col>
                <Col xs={12} md={8}>
                    <Container fluid>
                        <h2 className="text-uppercase mt-3 mt-md-0">an apartment whats made with passion and qualities</h2>
                        <Row>
                            <Col xs={12} sm={9} md={8}>
                                <p className="fs-6">
                                    Our real estate companies are the most respected building maker with national and international awards. We made our buildings with passion and qualities. Every unit is designed and made properly for our customers. One of the cause why people like our apartments is safety. We never compromise with our building safety reasons.
                                </p>
                                <Button as={Link} to="/about-us" variant="link" className="text-decoration-none">Learn more...</Button>
                            </Col>
                            <Col xs={12} sm={3} md={4}>
                                <Image src="https://i.ibb.co/QdJCmLs/Prix-d-Excellence-2.jpg" fluid className="d-none d-sm-block" />
                            </Col>
                        </Row>
                    </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default AboutSummary;