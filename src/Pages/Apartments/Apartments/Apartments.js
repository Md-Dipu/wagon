import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import useWindowDimensions from '../../../Hooks/useWindowDimensions';
import Apartment from '../../Shared/Apartment/Apartment';
import Navigation from '../../Shared/Navigation/Navigation';

const Apartments = () => {
    const [apartments, setApartments] = React.useState([]);
    const [limit, setLimit] = React.useState(0);

    const { deviceWidth } = useWindowDimensions();

    React.useEffect(() => {
        if (deviceWidth >= 992) {
            setLimit(15);
        } else if (deviceWidth >= 768) {
            setLimit(12);
        } else {
            setLimit(8);
        }
    }, [deviceWidth])

    React.useEffect(() => {
        fetch(`http://localhost:5000/apartments?limit=${limit}&page=${1}`)
            .then(res => res.json())
            .then(data => setApartments(data.results))
            .catch(console.error);
    }, [limit]);

    return (
        <>
            <Navigation />
            <div className="bg-dark d-lg-block d-none" style={{ height: 56 }}></div>
            <Container className="my-4">
                <Row className="g-4">
                    {apartments.map(apartment =>
                        <Col xs={12} md={6} lg={4} key={apartment._id}>
                            <Apartment apartment={apartment} />
                        </Col>
                    )}
                </Row>
            </Container>
        </>
    );
};

export default Apartments;