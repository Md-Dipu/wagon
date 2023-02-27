import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import { reviewAPI } from '../../../utils/API';
import './HomeReviews.css';

const HomeReviews = () => {
    const [reviews, setReviews] = React.useState([]);

    React.useEffect(() => {
        reviewAPI.get('?limit=5&fields=name,rating,message,ratingCodeWord')
            .then(res => setReviews(res.data.data));
    }, []);

    return (
        <Container className="niche-home-reviews my-4 pt-sm-4" id="reviews">
            <Carousel controls={false} indicators={false} className="niche-home-carosel ms-sm-4 bg-light px-4 py-3">
                {reviews.map(review =>
                    <Carousel.Item key={review._id}>
                        <div className="d-flex justify-content-between">
                            <div>
                                <FontAwesomeIcon icon={faStar} color="#ffd700" /> {review.rating}
                            </div>
                            <p className="fw-bold text-secondary text-capitalize">{review.ratingCodeWord}</p>
                        </div>
                        <p className="fs-6 fst-italic">"{review.message}"</p>
                        <p className="h6 text-end">-{review.name}</p>
                    </Carousel.Item>
                )}
            </Carousel>
        </Container>
    );
};

export default HomeReviews;