import React from 'react';
import Footer from '../Shared/Footer';
import Navigation from '../Shared/Navigation';
import About from './AboutSummary';
import Apartments from './HomeApartments';
import Banner from './HomeBanner';
import Reviews from './HomeReviews';
import Contact from './HomeContact';

const Home = () => {
    document.title = "Wagon - Buy your Dream Apartment";

    return (
        <>
            <Navigation />
            <Banner />
            <About />
            <Apartments />
            <Reviews />
            <Contact />
            <Footer />
        </>
    );
};

export default Home;