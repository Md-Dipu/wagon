import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import { bookingAPI } from '../../../utils/API';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = React.useState([]);

    React.useEffect(() => {
        bookingAPI.get('?limit=0')
            .then(res => setAllBooking(res.data.data));
    }, []);

    return (
        <Container fluid className="my-3">
            <h5 className="text-center text-uppercase">manage all booking</h5>
            <Table responsive className="text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Apartment</th>
                        <th scope="col">Price</th>
                        <th scope="col">User Name</th>
                        <th scope="col">User Email</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody>
                    {allBooking.map((booking, index) =>
                        <tr key={booking._id}>
                            <td>{index + 1}</td>
                            <td>{booking.apartment.name}</td>
                            <td>$ {booking.apartment.price}</td>
                            <td>{booking.user.name}</td>
                            <td>{booking.user.email}</td>
                            <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                            <td className="text-capitalize">{booking.status}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        const confirmation = window.confirm('Are you sure to Approve?');
                                        if (confirmation) {
                                            bookingAPI.patch(`/${booking._id}`, {
                                                status: 'approved'
                                            }).then(({ data }) => {
                                                if (data.success) {
                                                    const modifiedAllBooking = [...allBooking];
                                                    modifiedAllBooking[index].status = 'approved';
                                                    setAllBooking(modifiedAllBooking);
                                                }
                                            })
                                        }
                                    }}
                                    disabled={(booking.status !== 'pending')}
                                >
                                    Approved
                                </Button>
                            </td>
                            <td>
                                <Button
                                    variant="danger"
                                    onClick={() => {
                                        const confirmation = window.confirm('Are you sure to Delete?');
                                        if (confirmation) {
                                            bookingAPI.delete(`/${booking._id}`).then(({ data }) => {
                                                if (data.success) {
                                                    const restBookings = allBooking.filter(x => x._id !== booking._id);
                                                    console.log(restBookings);
                                                    setAllBooking(restBookings);
                                                }
                                            })
                                        }
                                    }}
                                >
                                    Delete
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default ManageAllBooking;