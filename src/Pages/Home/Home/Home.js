import React from 'react';
import Footer from '../../Shared/Footer/Footer';
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
            <Footer />
        </>
    );
};

export default Home;