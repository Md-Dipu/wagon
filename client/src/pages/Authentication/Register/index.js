import React from 'react';
import { Link } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import Footer from '../../Shared/Footer';
import DarkNav from '../../Shared/DarkNav';
import RegisterForm from '../RegisterForm';
import useAuth from '../../../hooks/useAuth';

const Register = () => {
    const { register } = useAuth();

    return (
        <>
            <DarkNav />
            <Container className="my-sm-5 my-0">
                <Row className="justify-content-center align-items-center">
                    <Col xs={12} md={6} lg={5} className="shadow p-sm-5 p-4 rounded">
                        <h3 className="text-center">Register New User</h3>
                        <span className="border-bottom border-2 border-warning d-block mx-auto mt-3 mb-4" style={{ width: '5em' }}></span>
                        <RegisterForm
                            register={register}
                        />
                    </Col>
                    <Col xs={12} md={6} lg={5} className="px-md-5 py-sm-0 py-4 my-sm-0 my-4">
                        <h5 className="">Privacy Policy</h5>
                        <div className="fs-6">Feel free to provide all the personal information. Your information is totally on a safe and secure hand. The information is just for verifying your identity. Never worry about it. If you feel any problem <Link to="/#contact-us">contact us</Link> now.</div>
                    </Col>
                </Row>
            </Container>
            <Footer />
        </>
    );
};

export default Register;