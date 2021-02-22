import React, { useRef, useState } from 'react';
import './Carousel.css';
import Carousel from 'react-bootstrap/Carousel';
import TypeWriter from 'react-typewriter';

const AppCarousel = () => {
    const title = useRef("");
    const [animation, setAnimation] = useState(false);

    const handleAnimation = () => {
        setAnimation(!animation);
        console.log(title.current);
    };
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
                        <h1>J<TypeWriter typing={animation ? -1 : 1} onTypingEnd={handleAnimation} minDelay={300}>urassic Jungle Adventures</TypeWriter></h1>
                        <h3>The mountains extreme sports festival is coming at Kef Chguegue, Bizerte. GET EXCITED!</h3>

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
