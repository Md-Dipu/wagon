import React from 'react';
import { Carousel, Container } from 'react-bootstrap';
import './HomeReviews.css';

const reviews = [
    { name: 'Dowam Mehahil', reviewText: 'Of couse the best online apartment saler website. Attached companies and Provieders are well knowned and helpfull. They help me too much and provied me a best suggestion to find-out my choice.' },
    { name: 'H. Barmand', reviewText: 'I had a great time when I was dealing with this people about my case. I was looking for a good looking apartment what should be located in a soundless place. I found the best one for me.' }
];

const HomeReviews = () => {
    return (
        <Container className="niche-home-reviews my-4 pt-sm-4" id="reviews">
            <Carousel controls={false} indicators={false} className="niche-home-carosel ms-sm-4 bg-light px-4 py-3">
                {reviews.map((review, _idx) => (
                    <Carousel.Item key={_idx}>
                        <p className="fs-6 fst-italic">"{review.reviewText}"</p>
                        <p className="h6 text-end">-{review.name}</p>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default HomeReviews;