import React from 'react';
import { Container, Col } from 'react-bootstrap';
import Sport from './Sport';
import './Sports.css';

const Sports = () => {

    return (
        <Container>
            <h2 className="display-4">Available activities</h2>
            <div className="sports__container">

                <Col className="row__item">
                    <Sport></Sport>
                </Col>
                <Col className="row__item">
                    <Sport></Sport>
                </Col>
                <Col className="row__item">
                    <Sport></Sport>
                </Col>
                <Col className="row__item">
                    <Sport></Sport>
                </Col>
                <Col className="row__item">
                    <Sport></Sport>
                </Col>

            </div>
        </Container>
    )
}

export default Sports
