import React from 'react';
import AppCarousel from './home/Carousel/AppCarousel';
import './Home.css';
import Navigation from './Navigation/Navigation';
import HomeContent from './home/HomeContent';
import Footer from './footer/Footer';


const Homepage = () => {
    return (
        <div className="home">
            <Navigation></Navigation>
            <AppCarousel></AppCarousel>
            <HomeContent></HomeContent>
            <Footer></Footer>
        </div>
    )
}

export default Homepage
