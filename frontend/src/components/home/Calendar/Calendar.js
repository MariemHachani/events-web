import React, { useEffect, useState } from 'react';
import { Col, Container, Jumbotron, Row } from 'react-bootstrap';
import './Calendar.css';

const Calendar = () => {


    return (
        <Jumbotron>
            <Container>
                <h2 className="display-4">Event schedule</h2>
            </Container>
            <Container>
                <Row>
                    <Col>
                        <div className="agenda">
                            <div className="table-responsive">
                                <table className="table table-condensed table-hover  table-bordered">
                                    <thead>
                                        <tr>
                                            <th>Date</th>
                                            <th>Time</th>
                                            <th>Event</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td className="agenda-date" className="active" rowspan="1">
                                                <div className="dayofmonth">26</div>
                                                <div className="dayofweek">Saturday</div>
                                                <div className="shortdate text-muted">July, 2014</div>
                                            </td>
                                            <td className="agenda-time">
                                                5:30 AM
                        </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    <i className="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
                                Fishing
                            </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="agenda-date" className="active" rowspan="3">
                                                <div className="dayofmonth">24</div>
                                                <div className="dayofweek">Thursday</div>
                                                <div className="shortdate text-muted">July, 2014</div>
                                            </td>
                                            <td className="agenda-time">
                                                8:00 - 9:00 AM
                        </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Doctor's Appointment
                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                10:15 AM - 12:00 PM
                        </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Meeting with executives
                            </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                7:00 - 9:00 PM
                        </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Aria's dance recital
                            </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>                    </Col>

                </Row>
            </Container>

        </Jumbotron>
    )
};

export default Calendar;