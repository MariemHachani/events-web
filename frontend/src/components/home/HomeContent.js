import React from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import Calendar from './Calendar/Calendar';
import Organizators from './Organizators/Organizators';
import Sports from './Sports/Sports';

const HomeContent = () => {
    return (
        <Jumbotron fluid>
            <Calendar></Calendar>
            <Sports></Sports>
            <Organizators></Organizators>
            <Container>
                <h1>Fluid jumbotron</h1>
                <Button>hELLO</Button>
            </Container>
            <Container>
                <p>
                    Caving – also known as spelunking in the United States and Canada and potholing in the United Kingdom and Ireland – is the recreational pastime of exploring wild cave systems (as distinguished from show caves). In contrast, speleology is the scientific study of caves and the cave environment.[1]

                    The challenges involved in caving vary according to the cave being visited; in addition to the total absence of light beyond the entrance, negotiating pitches, squeezes,[2] and water hazards can be difficult.[3] Cave diving is a distinct, and more hazardous, sub-speciality undertaken by a small minority of technically proficient cavers.[4] In an area of overlap between recreational pursuit and scientific study, the most devoted and serious-minded cavers become accomplished at the surveying and mapping of caves and the formal publication of their efforts. These are usually published freely and publicly, especially in the UK and other European countries, although in the US, these are generally private.

                    Sometimes categorized as an "extreme sport", it is not commonly considered as such by longtime enthusiasts, who may dislike the term for its connotation of disregard for safety.[2][5]
    </p>
            </Container>
        </Jumbotron>

    )
}

export default HomeContent
