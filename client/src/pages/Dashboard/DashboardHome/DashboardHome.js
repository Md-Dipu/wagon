import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';
import { bookingAPI } from '../../../utils/API'

const DashboardHome = () => {
    const [bookings, setBookings] = React.useState([]);
    const [count, setCount] = React.useState(0);
    const [approvedBooking, setApprovedBooking] = React.useState([]);
    const [pendingBooking, setPendingBooking] = React.useState([]);
    const [cost, setCost] = React.useState(0);

    const { user } = useAuth();

    React.useEffect(() => {
        if (user?.email) {
            bookingAPI.get(`?user.email=${user.email}&limit=0&fields=apartment.name,apartment.price,buyer.name,status,createdAt`)
                .then(res => res.data)
                .then(({ data, count }) => {
                    setBookings(data);
                    setCount(count);
                });
        }
    }, [user?.email]);

    React.useEffect(() => {
        setApprovedBooking(bookings.filter(x => x.status === 'approved'));
        setPendingBooking(bookings.filter(x => x.status === 'pending'));
        setCost(bookings.reduce(
            (previous, current) => previous + current.apartment.price,
            0
        ));
    }, [bookings]);

    return (
        <Container fluid className="my-3">
            <Row className="g-3 text-center mb-3">
                <Col xs={12} md={4}>
                    <div className="border rounded py-4" style={{ backgroundColor: '#93c5fd' }}>
                        <p className="fs-2">{count}</p>
                        <p className="fs-4">Total Booking</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="border rounded py-4" style={{ backgroundColor: '#6ee7b7' }}>
                        <p className="fs-2">{approvedBooking.length}</p>
                        <p className="fs-4">Approved Booking</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="border rounded py-4" style={{ backgroundColor: '#fcd34d' }}>
                        <p className="fs-2">$ {cost}</p>
                        <p className="fs-4">Total Cost</p>
                    </div>
                </Col>
            </Row>
            <Row className="g-3">
                <Col xs={12} md={6}>
                    <div className="rounded p-3" style={{ backgroundColor: '#ede9fe', minHeight: '50vh', height: '100%' }}>
                        <h5 className="text-center">Pending Booking</h5>
                        {pendingBooking.length === 0 && <p className="text-center fs-5">No item found!</p>}
                        <Table responsive hover className="text-center">
                            <tbody>
                                {pendingBooking?.map((booking, index) =>
                                    <tr key={booking._id}>
                                        <td>{index + 1}</td>
                                        <td>{booking.apartment.name}</td>
                                        <td>{booking.buyer.name}</td>
                                        <td>$ {booking.apartment.price}</td>
                                        <td>{new Date(booking.createdAt)
                                            .toDateString()
                                            .replace(' ', ', ')}
                                        </td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Col>
                <Col xs={12} md={6}>
                    <div className="rounded p-3" style={{ backgroundColor: '#fee2e2', minHeight: '50vh', height: '100%' }}>
                        <h5 className="text-center">Approved Booking</h5>
                        {approvedBooking.length === 0 && <p className="text-center fs-5">No item found!</p>}
                        <Table responsive hover className="text-center">
                            <tbody>
                                {approvedBooking?.map((book, index) =>
                                    <tr key={book._id}>
                                        <td>{index + 1}</td>
                                        <td>{book.apartment.name}</td>
                                        <td>{book.buyer.name}</td>
                                        <td>$ {book.apartment.price}</td>
                                        <td>{book.bookingDate}</td>
                                    </tr>
                                )}
                            </tbody>
                        </Table>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};

export default DashboardHome;