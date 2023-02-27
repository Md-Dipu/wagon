import React from 'react';
import { Container, Table } from 'react-bootstrap';
import { userAPI } from '../../../utils/API';

const AdminTable = ({ observer }) => {
    const [adminUsers, setAdminUsers] = React.useState([]);

    React.useEffect(() => {
        userAPI.get('?role=admin').then(({ data }) => {
            setAdminUsers(data.data);
        });
    }, [observer]);

    return (
        <Container fluid>
            <Table responsive>
                <thead>
                    <tr>
                        <th scope="col">Index</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Database Object ID</th>
                    </tr>
                </thead>
                <tbody>
                    {adminUsers.map((adminUser, index) =>
                        <tr key={adminUser._id}>
                            <td>{index + 1}</td>
                            <td>{adminUser.name}</td>
                            <td>{adminUser.email}</td>
                            <td>{adminUser.phone || 'Not found'}</td>
                            <td>{adminUser._id}</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default AdminTable;