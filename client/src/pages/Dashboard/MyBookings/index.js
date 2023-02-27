import React from 'react';
import { Button, Container, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { bookingAPI } from '../../../utils/API';

const MyBookings = () => {
    const [bookings, setBookings] = React.useState([]);

    const { user } = useAuth();

    React.useEffect(() => {
        if (user?.email) {
            bookingAPI.get(`?user.email=${user.email}`)
                .then(res => setBookings(res.data.data));
        }
    }, [user?.email]);

    const cancelBooking = (bookingId) => {
        const confirmation = window.confirm('Are you sure to Cancel?');
        if (!confirmation) return;
        bookingAPI.delete(`/${bookingId}`)
            .then(({ data }) => {
                if (data.success) {
                    const restBooking = bookings
                        .filter(booking =>
                            booking._id !== bookingId);
                    setBookings(restBooking);
                }
            });
    }

    return (
        <Container fluid>
            <h5 className="text-center text-uppercase my-3">my bookings</h5>
            <Table responsive className="text-center">
                <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Apartment</th>
                        <th scope="col">Price</th>
                        <th scope="col">Buyer Name</th>
                        <th scope="col">Buyer Email</th>
                        <th scope="col">Buyer Phone</th>
                        <th scope="col">Booking Date</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {bookings.map((booking, index) =>
                        <tr key={booking._id}>
                            <td>{index + 1}</td>
                            <td>{booking.apartment.name}</td>
                            <td>$ {booking.apartment.price}</td>
                            <td>{booking.buyer.name}</td>
                            <td>{booking.buyer.email}</td>
                            <td>{booking.buyer.phone}</td>
                            <td>{new Date(booking.createdAt).toLocaleDateString()}</td>
                            <td className="text-capitalize">{booking.status}</td>
                            <td>
                                <Button
                                    variant="warning"
                                    onClick={() => cancelBooking(booking._id)}
                                >
                                    Cancel
                                </Button>
                            </td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default MyBookings;