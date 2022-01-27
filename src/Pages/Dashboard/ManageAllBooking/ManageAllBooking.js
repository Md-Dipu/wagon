import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';

const ManageAllBooking = () => {
    const [allBooking, setAllBooking] = React.useState([]);

    React.useEffect(() => {
        fetch('http://localhost:5000/bookings')
            .then(res => res.json())
            .then(data => setAllBooking(data.result))
            .catch(console.error);
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
                            <td>{booking.bookingDate}</td>
                            <td>{booking.status}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => {
                                        const confirmation = window.confirm('Are you sure to Approve?');
                                        if (confirmation) {
                                            fetch(`http://localhost:5000/bookings/approved/${booking._id}`, {
                                                method: 'PUT'
                                            })
                                                .then(() => {
                                                    const modifiedAllBooking = [...allBooking];
                                                    modifiedAllBooking[index].status = 'Approved';
                                                    setAllBooking(modifiedAllBooking);
                                                })
                                        }
                                    }}
                                    disabled={(booking.status !== 'Pending')}
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
                                            fetch(`http://localhost:5000/bookings/${booking._id}`, {
                                                method: 'DELETE'
                                            })
                                                .then(() => {
                                                    const restBookings = allBooking.filter(x => x._id !== booking._id);
                                                    setAllBooking(restBookings);
                                                })
                                                .catch(console.error);
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