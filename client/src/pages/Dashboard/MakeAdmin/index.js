import React from 'react';
import { Button, Container, Form, InputGroup } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import AdminTable from '../AdminTable';
import { userAPI } from '../../../utils/API';

const MakeAdmin = () => {
    const [stateObserver, setStateObserver] = React.useState(0); // number: observing change every time

    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        userAPI.patch(`/email/${data.email}`, {
            role: 'admin'
        }).then(({ data }) => {
            if (data.success) {
                setStateObserver(stateObserver + 1);
                reset();
            }
        });
    };

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
                observer={stateObserver}
            />
        </>
    );
};

export default MakeAdmin;