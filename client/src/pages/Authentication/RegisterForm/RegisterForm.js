import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useLocation } from 'react-router-dom';
import { useHistory } from 'react-router-dom';

const RegisterForm = ({ register: registerUser }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const location = useLocation();
    const history = useHistory();

    const handleOnSubmit = data => {
        registerUser(data, history, location?.state?.from);
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Name"
                    className={`${errors.name && 'border-danger'}`}
                    {...register('name', { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    className={`${errors.email && 'border-danger'}`}
                    {...register('email', { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-3">
                <Form.Control
                    type="text"
                    placeholder="Phone"
                    className={`${errors.phone && 'border-danger'}`}
                    {...register('phone', { required: true })}
                />
            </Form.Group>
            <Form.Group className="mb-1">
                <Form.Control
                    type="password"
                    placeholder="Password"
                    className={`${errors.password && 'border-danger'}`}
                    {...register('password', { required: true, minLength: 6 })}
                />
            </Form.Group>
            <Button type="button" variant="link" as={Link} to={{ pathname: "/login", state: { from: location?.state?.from } }} className="mb-1 text-decoration-none">Already have an account?</Button><br />
            <Button type="submit">Register</Button>{" "}
            <Button type="button" variant="light" onClick={() => reset()}>Cancel</Button>
        </form>
    );
};

export default RegisterForm;