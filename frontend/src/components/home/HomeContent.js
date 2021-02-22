import React from 'react';
import { Button, Jumbotron, Container } from 'react-bootstrap';
import Calendar from './Calendar/Calendar';
import Organizators from './Organizators/Organizators';
import Parallax from './parallex/Parallax';
import Sports from './Sports/Sports';

const HomeContent = () => {
    return (
        <Jumbotron fluid>
            <Calendar></Calendar>
            <Sports></Sports>
            <Parallax></Parallax>
            <Organizators></Organizators>

        </Jumbotron>

    )
}

export default HomeContent
