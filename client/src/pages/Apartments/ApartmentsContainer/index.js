import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { Button, ButtonGroup, Col, Container, Row } from 'react-bootstrap';
import Apartment from '../../Shared/Apartment';

const ApartmentsContainer = (props) => {
    const { apartments, count, setCurrentPage, setPageLoading, limit, currentPage, observer } = props;

    return (
        <Container className="my-4">
            <Row className="g-4">
                {apartments.map(apartment =>
                    <Col xs={12} md={6} lg={4} key={apartment._id}>
                        <Apartment apartment={apartment} />
                    </Col>
                )}
            </Row>

            {/* pagination: button holder */}
            {Math.ceil(count / limit) > 1 && <div className="text-center my-3">
                <ButtonGroup className="text-center">
                    <Button
                        variant="outline-primary"
                        onClick={() => {
                            if (currentPage - 1 >= 1) {
                                setPageLoading(true);
                                setCurrentPage(currentPage - 1);
                                observer();
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowLeft} />
                    </Button>
                    {[...Array(Math.ceil(count / limit)).keys()]
                        .map(page => (
                            <Button
                                key={page}
                                variant={(page + 1) === currentPage ? 'primary' : 'outline-primary'}
                                onClick={() => {
                                    setPageLoading(true);
                                    setCurrentPage(page + 1);
                                    observer();
                                }}
                            >{page + 1}</Button>
                        ))}
                    <Button
                        variant="outline-primary"
                        onClick={() => {
                            if (currentPage + 1 <= Math.ceil(count / limit)) {
                                setPageLoading(true);
                                setCurrentPage(currentPage + 1);
                                observer();
                            }
                        }}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </Button>
                </ButtonGroup>
            </div>}
        </Container>
    );
};

export default ApartmentsContainer;