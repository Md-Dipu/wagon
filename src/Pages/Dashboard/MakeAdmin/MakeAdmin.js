import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminTable from '../AdminTable/AdminTable';

const MakeAdmin = () => {
    const [stateObsever, setStateObserver] = React.useState(0); // number: observeing change every time

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = data => {
        fetch('https://niche-product-website.herokuapp.com/users/admin', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                reset();
                if (data.modifiedCount > 0)
                    setStateObserver(stateObsever + 1);
            })
            .catch(console.error);
    }

    return (
        <>
            <Container fluid className="my-4">
                <h4 className="text-center text-uppercase mb-3">make new admin</h4>
                <form onSubmit={handleSubmit(onSubmit)} className="mx-auto" style={{ maxWidth: 500 }}>
                    <InputGroup className="">
                        <Form.Control
                            type="email"
                            placeholder="Email"
                            className={errors.email && 'border-danger'}
                            {...register('email', { required: true })}
                        />
                        <Button
                            type="submit"
                            variant="secondary"
                        >
                            Add as Admin
                        </Button>
                    </InputGroup>
                </form>
            </Container>
            <AdminTable
                observer={stateObsever}
            />
        </>
    );
};

export default MakeAdmin;