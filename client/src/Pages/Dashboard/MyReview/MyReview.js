import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import ReactStars from 'react-rating-stars-component';
import useAuth from '../../../hooks/useAuth';
import { reviewAPI } from '../../../utils/API';

const MyReview = () => {
    const [rating, setRating] = React.useState(0);

    const { user } = useAuth();
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        reviewAPI.post({
            ...data,
            rating,
            user: {
                name: user.displayName,
                email: user.email
            }
        }).then(({ data }) => {
            if (data.success) {
                reset();
            }
        });
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} sm={10} md={7} lg={6} className="shadow p-md-4 p-3 m-md-4 my-3">
                    <h5 className="text-center text-uppercase mb-3">Add you review</h5>
                    <form onSubmit={handleSubmit(onSubmit)} className="text-center">
                        <div className="d-flex justify-content-center align-items-center mb-3" style={{ marginTop: '-20px' }}>
                            <ReactStars
                                count={5}
                                onChange={setRating}
                                size={60}
                                activeColor="#ffd700"
                            />
                        </div>
                        <div className="d-flex mb-3">
                            <Form.Control
                                type="text"
                                placeholder="Name"
                                defaultValue={user?.displayName}
                                className={`me-2 ${errors.name && 'border-danger'}`}
                                {...register('name', { required: true })}
                            />
                            <Form.Control
                                type="text"
                                placeholder="Email"
                                defaultValue={user?.email}
                                className={`ms-2 ${errors.email && 'border-danger'}`}
                                {...register('email', { required: true })}
                            />
                        </div>
                        <Form.Control
                            as="textarea"
                            placeholder="Review Message"
                            className={`mb-3 ${errors.message && 'border-danger'}`}
                            {...register('message', { required: true })}
                            rows={5}
                        />
                        <Button
                            type="submit"
                            variant="warning"
                        >
                            <FontAwesomeIcon icon={faPaperPlane} /> Send
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default MyReview;