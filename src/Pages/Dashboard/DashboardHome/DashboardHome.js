import React from 'react';
import { Col, Container, Row, Table } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const [myBookings, setMyBookings] = React.useState({ count: 0, result: [] });
    const [approvedBooking, setApprovedBooking] = React.useState([]);
    const [pendingBooking, setPendingBooking] = React.useState([]);
    const [cost, setCost] = React.useState(0);
    const { count, result: booking } = myBookings;

    const { user } = useAuth();

    React.useEffect(() => {
        fetch(`http://localhost:5000/bookings?email=${user?.email}`)
            .then(res => res.json())
            .then(setMyBookings)
            .catch(console.error);
    }, [user?.email]);

    React.useEffect(() => {
        setApprovedBooking(booking.filter(x => x.status === 'Approved'));
        setPendingBooking(booking.filter(x => x.status === 'Pending'));
        setCost(booking.reduce((previous, current) => previous + current.apartment.price, 0));
    }, [booking]);

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
                                {pendingBooking?.map((book, index) =>
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