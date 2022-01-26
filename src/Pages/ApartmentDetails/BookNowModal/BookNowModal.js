import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const BookNowModal = (props) => {
    const { show, onCloseModal, apartment } = props;
    const { name } = apartment;

    const { user } = useAuth();

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const handleAction = data => {
        const newBooking = {
            apartment,
            user: { name: user.displayName, email: user.email },
            buyer: data,
            bookingDate: new Date().toLocaleDateString()
        };
        fetch('http://localhost:5000/bookings', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newBooking)
        })
            .then(() => reset())
            .catch(console.error);
        onCloseModal();
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
                    <Button type="submit">Submit</Button>
                </form>
            </Container>
        </Modal>
    );
};

export default BookNowModal;