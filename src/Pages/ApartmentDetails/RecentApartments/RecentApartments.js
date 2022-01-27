import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import Apartment from '../../Shared/Apartment/Apartment';

const RecentApartments = () => {
    const [recentApartments, setRecentApartments] = React.useState([]);
    const [limit, setLimit] = React.useState(3);

    const { deviceWidth } = useWindowDimensions();

    // limit depends on windows/devices width
    React.useEffect(() => {
        if (deviceWidth < 992 && deviceWidth >= 768) {
            setLimit(4);
        } else {
            setLimit(3);
        }
    }, [deviceWidth]);

    React.useEffect(() => {
        fetch(`http://localhost:5000/apartments/recent?limit=${limit}`)
            .then(res => res.json())
            .then(setRecentApartments)
            .catch(console.error);
    }, [limit]);

    return (
        <Container className="my-3">
            <h5 className="text-center text-uppercase">Recent Apartments</h5>
            <Row className="g-4 my-3">
                {recentApartments.map(apartment =>
                    <Col xs={12} md={6} lg={4} key={apartment._id}>
                        <Apartment apartment={apartment} />
                    </Col>
                )}
            </Row>
        </Container>
    );
};

export default RecentApartments;