import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import Sport from './Sport';
import './Sports.css';

const Sports = () => {
    return (
        <Container>

            <Row className="sports__container">
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

            </Row>
        </Container>
    )
}

export default Sports
