import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWindowDimensions from '../../../hooks/useWindowDimensions';
import Apartment from '../../Shared/Apartment';
import { apartmentAPI } from '../../../utils/API';

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
        apartmentAPI.get(`?limit=${limit}&sortby=-createdAt&fields=name,img,description.shortDescription,price`)
            .then(res => setRecentApartments(res.data.data));
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