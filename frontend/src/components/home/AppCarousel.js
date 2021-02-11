import React from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';

const AppCarousel = () => {
    return (
        <div className="carousel__container">
            <Carousel className=" carousel__style">
                <Carousel.Item className=" carousel__item">
                    <img
                        className="d-block w-100"
                        src="./images/carousel/DSC_3062.jpg"
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1>Jurassic Jungle Adventures</h1>
                        <h3>
                            The mountain's extreme sports festival is coming at Kef Chguegue, Bizerte. GET EXCITED!</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=" carousel__item">
                    <img
                        className="d-block w-100"
                        src="./images/carousel/DSC_0049.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Jurassic Jungle Adventures</h1>
                        <h3>Caving - Climbing - Mountain biking - Hiking - Trekking - Slackline</h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item className=" carousel__item">
                    <img
                        className="d-block w-100"
                        src="./images/carousel/IMG_1406.jpg"
                        alt="Third slide"
                    />

                    <Carousel.Caption>
                        <h1>Jurassic Jungle Adventures</h1>
                        <h3>Register and pick your favorite activities to have an amazing experience with people that share your interests.</h3>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default AppCarousel;
