import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../hooks/useAuth';
import { bookingAPI } from '../../../utils/API';

const BookNowModal = (props) => {
    const { show, onCloseModal, apartment } = props;
    const { name } = apartment;

    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleAction = data => {
        delete Object.assign(apartment, { id: apartment._id })._id;
        const newBooking = {
            apartment,
            user: { name: user.displayName, email: user.email },
            buyer: data,
            bookingDate: new Date().toLocaleDateString()
        };
        bookingAPI.post(newBooking).then(({ data }) => {
            if (data.success) {
                reset();
                onCloseModal();
            }
        });
    }

    return (
        <Modal
            show={show}
            onHide={onCloseModal}
            size="md"
            centered
        >
            <Container fluid className="text-center px-5 py-4 w-100">
                <h4 className="mb-3">{name}</h4>
                <form onSubmit={handleSubmit(handleAction)}>
                    <Form.Control
                        type="text"
                        placeholder="Name"
                        className={`mb-3 ${errors.name && 'border-danger'}`}
                        defaultValue={user.displayName}
                        {...register("name", { required: true })}
                    />
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        className={`mb-3 ${errors.email && 'border-danger'}`}
                        defaultValue={user.email}
                        {...register("email", { required: true })}
                    />
                    <Form.Control
                        type="text"
                        placeholder="Phone"
                        className={`mb-3 ${errors.phone && 'border-danger'}`}
                        {...register("phone", { required: true })}
                    />
                    <Button variant="primary" type="submit">Submit</Button>{" "}
                    <Button variant="outline-secondary" onClick={onCloseModal}>Cancel</Button>
                </form>
            </Container>
        </Modal>
    );
};

export default BookNowModal;