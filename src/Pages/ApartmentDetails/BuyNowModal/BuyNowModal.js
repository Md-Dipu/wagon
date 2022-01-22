import React from 'react';
import { Button, Container, Form, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';

const BuyNowModal = (props) => {
    const { show, onCloseModal, apartment } = props;
    const { name } = apartment;

    const { register, handleSubmit, formState: { errors } } = useForm();

    const handleAction = data => {
        const newOrder = {
            apartment,
            orderer: data,
            orderedDate: new Date().toLocaleDateString()
        };
        console.log(newOrder);
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
                        defaultValue={'Md. Dipu'}
                        {...register("name", { required: true })}
                    />
                    <Form.Control
                        type="email"
                        placeholder="Email"
                        className={`mb-3 ${errors.email && 'border-danger'}`}
                        defaultValue={'dipu@def.com'}
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

export default BuyNowModal;