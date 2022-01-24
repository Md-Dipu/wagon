import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import Loading from '../../Shared/Loading/Loading';

const AdminRoute = ({ children, ...rest }) => {
    const { admin, isLoading } = useAuth();

    if (isLoading) {
        return (<Loading />);
    }

    return (
        <Route
            {...rest}
            render={({ location }) =>
                admin ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: "/login",
                            state: { from: location }
                        }}
                    />
                )
            }
        />
    );
};

export default AdminRoute;