import React from 'react';
import Navigation from '../../Shared/Navigation/Navigation';
import About from '../AboutSummary/AboutSummary';
import Apartments from '../HomeApartments/HomeApartments';
import Banner from '../HomeBanner/HomeBanner';
import Reviews from '../HomeReviews/HomeReviews';

const Home = () => {
    document.title = "Wagon - Buy your Dream Apartment";

    return (
        <>
            <Navigation />
            <Banner />
            <About />
            <Apartments />
            <Reviews />
        </>
    );
};

export default Home;