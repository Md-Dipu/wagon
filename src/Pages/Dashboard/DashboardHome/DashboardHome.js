import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useAuth from '../../../Hooks/useAuth';

const DashboardHome = () => {
    const [myBookings, setMyBookings] = React.useState({ count: 0, result: [] });
    const [approvedBooking, setApprovedBooking] = React.useState(0);
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
        setApprovedBooking(booking.filter(x => x.status === 'Approved').length);
        setCost(booking.reduce((previous, current) => previous + current.apartment.price, 0));
    }, [booking]);

    return (
        <Container fluid className="my-3">
            <Row className="justify-content-evenly text-center">
                <Col xs={12} md={4}>
                    <div className="border rounded py-4" style={{ backgroundColor: '#93c5fd' }}>
                        <p className="fs-2">{count}</p>
                        <p className="fs-4">Total Booking</p>
                    </div>
                </Col>
                <Col xs={12} md={4}>
                    <div className="border rounded py-4" style={{ backgroundColor: '#6ee7b7' }}>
                        <p className="fs-2">{approvedBooking}</p>
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
        </Container>
    );
};

export default DashboardHome;