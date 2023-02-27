import React from 'react';
import { Button, Col, Container, Form, InputGroup, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { apartmentAPI } from '../../../utils/API';

const AddApartment = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const history = useHistory();

    const onSubmit = (data) => {
        const {
            price,
            shortDescription,
            fullDescription,
            roomSize,
            roomNumber,
            roomFloor,
            image0,
            image1,
            image2,
            more,
            ...rest
        } = data;
        apartmentAPI.post({
            ...rest,
            price: +price,
            description: {
                shortDescription,
                fullDescription
            },
            roomInfo: {
                roomSize,
                roomNumber,
                roomFloor
            },
            templateImages: [image0, image1, image2],
            more: more.split(',').map(item => item.trim())
        }).then(({ data }) => {
            if (data.success) {
                reset();
                history.push('/dashboard/manage-apartments');
            }
        });
    }

    return (
        <Container fluid>
            <Row className="justify-content-center">
                <Col xs={12} md={9} lg={7} className="shadow p-md-4 p-3 m-md-4 my-3">
                    <h5 className="text-center text-uppercase mb-3">Add a apartment</h5>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Control
                            type="text"
                            placeholder="Name"
                            className={`mb-3 ${errors.name && 'border-danger'}`}
                            {...register('name', { required: true })}
                        />
                        <Form.Control
                            type="text"
                            placeholder="Short Description"
                            className={`mb-3 ${errors.shortDescription && 'border-danger'}`}
                            {...register('shortDescription', { required: true })}
                        />
                        {/* images url */}
                        <Row xs={1} sm={2} className="gy-0 gx-3 my-0">
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Image URL-1"
                                    className={`mb-3 ${errors.img && 'border-danger'}`}
                                    {...register('img', { required: true })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Image URL-2"
                                    className={`mb-3 ${errors.image0 && 'border-danger'}`}
                                    {...register('image0', { required: true })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Image URL-3"
                                    className={`mb-3 ${errors.image1 && 'border-danger'}`}
                                    {...register('image1', { required: true })}
                                />
                            </Col>
                            <Col>
                                <Form.Control
                                    type="text"
                                    placeholder="Image URL-4"
                                    className={`mb-3 ${errors.image2 && 'border-danger'}`}
                                    {...register('image2', { required: true })}
                                />
                            </Col>
                        </Row>
                        <Form.Control
                            type="text"
                            placeholder="Address"
                            className={`mb-3 ${errors.address && 'border-danger'}`}
                            {...register('address', { required: true })}
                        />
                        <Form.Control
                            as="textarea"
                            rows={5}
                            placeholder="Description"
                            className={`mb-3 ${errors.fullDescription && 'border-danger'}`}
                            {...register('fullDescription', { required: true })}
                            multiple
                        />
                        {/* room information */}
                        <Row xs={1} sm={2} className="gy-0 gx-3 my-0">
                            <Col>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="number"
                                        placeholder="Room Size"
                                        className={`${errors.roomSize && 'border-danger'}`}
                                        {...register('roomSize', { required: true })}
                                    />
                                    <InputGroup.Text>sq/ft</InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <Form.Control
                                        type="number"
                                        placeholder="Room Number"
                                        className={`${errors.roomNumber && 'border-danger'}`}
                                        {...register('roomNumber', { required: true })}
                                    />
                                    <InputGroup.Text>Rooms</InputGroup.Text>
                                </InputGroup>
                            </Col>
                            <Col>
                                <Form.Control
                                    type="number"
                                    placeholder="Room Floor"
                                    className={`mb-3 ${errors.roomFloor && 'border-danger'}`}
                                    {...register('roomFloor', { required: true })}
                                />
                            </Col>
                            <Col>
                                <InputGroup className="mb-3">
                                    <InputGroup.Text>$</InputGroup.Text>
                                    <Form.Control
                                        type="number"
                                        placeholder="Price"
                                        className={`${errors.price && 'border-danger'}`}
                                        {...register('price', { required: true })}
                                    />
                                </InputGroup>
                            </Col>
                        </Row>
                        <Form.Control
                            type="text"
                            placeholder="More (Item1, Item2, ..., ItemN)"
                            className="mb-3"
                            {...register('more')}
                        />
                        <Button type="submit">Submit</Button>{" "}
                        <Button
                            type="button"
                            variant="light"
                            onClick={() => reset()}
                        >
                            Cancel
                        </Button>
                    </form>
                </Col>
            </Row>
        </Container>
    );
};

export default AddApartment;