import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

const LoginForm = ({ logIn }) => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();
    const location = useLocation();
    const history = useHistory();

    const handleOnSubmit = data => {
        const { email, password } = data;
        logIn(email, password, history, location?.state?.from);
    }

    return (
        <form onSubmit={handleSubmit(handleOnSubmit)}>
            <Form.Group className="mb-3">
                <Form.Control
                    type="email"
                    placeholder="Email"
                    className={`${errors.email && 'border-danger'}`}
                    {...register('email', { required: true })}
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
            <Button type="button" variant="link" as={Link} to={{ pathname: "/register", state: { from: location?.state?.from } }} className="mb-1 text-decoration-none">Don't have an account?</Button><br />
            <Button type="submit">Login</Button>{" "}
            <Button type="button" variant="light" onClick={() => reset()}>Cancel</Button>
        </form>
    );
};

export default LoginForm;