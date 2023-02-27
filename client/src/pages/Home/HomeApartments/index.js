import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Col, Container, Row } from 'react-bootstrap';
import Apartment from '../../Shared/Apartment';
import { apartmentAPI } from '../../../utils/API';
import './HomeApartments.css';

const HomeApartments = () => {
    const [apartments, setApartments] = React.useState([]);

    React.useEffect(() => {
        apartmentAPI.get('?limit=5&sortby=-price&fields=name,img,description.shortDescription,price')
            .then(res => setApartments(res.data.data));
    }, []);

    return (
        <Container>
            <h3 className="text-center">Apartments</h3>
            <span className="niche-divider mx-auto my-3" style={{ width: 50 }}></span>
            <p className="text-center fs-5 mb-4">Find the unit with best Price</p>
            <Container fluid className="my-4">
                <Row className="g-4">
                    {apartments.map(apartment =>
                        <Col xs={12} md={6} lg={4} key={apartment._id}>
                            <Apartment apartment={apartment} />
                        </Col>
                    )}
                    <Col xs={12} md={6} lg={4} key={apartments.length}>
                        <div className="d-flex justify-content-center align-items-center" style={{ height: '100%', minHeight: 350, backgroundImage: 'url(https://i.ibb.co/qR0wvgK/home-show-more.jpg)', backgroundPosition: 'center', backgroundSize: 'cover' }}>
                            <Button as={Link} to="/apartments" variant="outline-warning" className="d-block rounded-pill text-uppercase">Show more</Button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </Container>
    );
};

export default HomeApartments;