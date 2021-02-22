import React from 'react'
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Organizators.css';

const Organizators = () => {
    return (
        <Jumbotron>
            <Container>
                <h2 className="display-4">Organization team</h2>
            </Container>
            <Container>
                <div className="organizator__content">
                    <div className="organizator__intro order-1">
                        uifgzefombfi
                    </div>
                    <div className="organizator__image order-2" style={{
                        backgroundImage: 'url("./images/119511418_3452294868161567_2266724771039006581_o.jpg")'
                    }}>
                    </div>
                </div>
            </Container>
            <Container>
                <Row className="organizator__content">
                    <Col className="organizator__intro order-2">
                        uifgzefombfi
                    </Col>
                    <Col className="organizator__image order-1">
                        fhruoforbgkl
                </Col>
                </Row>
            </Container>
            <Container>
                <Row className="organizator__content">
                    <Col className="organizator__intro order-1">
                        uifgzefombfi
                    </Col>
                    <Col className="organizator__image order-2">
                        fhruoforbgkl
                </Col>
                </Row>
            </Container>
        </Jumbotron>
    )
}

export default Organizators
