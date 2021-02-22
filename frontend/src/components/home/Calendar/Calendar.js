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
                                            <td className="agenda-date" className="active" rowspan="4">
                                                <div className="dayofmonth">30</div>
                                                <div className="dayofweek">Thursday</div>
                                                <div className="shortdate text-muted">August, 2021</div>
                                            </td>
                                            <td className="agenda-time">
                                                3 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    <i className="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
                                                    Guests arrival
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                3:30  PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Event's beginning
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                5:00 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Campsite transportation
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                7:00 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Campsite arrival and installation
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="agenda-date" className="active" rowspan="3">
                                                <div className="dayofmonth">1</div>
                                                <div className="dayofweek">Friday</div>
                                                <div className="shortdate text-muted">September, 2021</div>
                                            </td>
                                            <td className="agenda-time">
                                                6:00 AM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Breakfast
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                7:00 AM - 7:00 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Activities
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                8:00 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Dinner and animation
                                                </div>
                                            </td>
                                        </tr>

                                        <tr>
                                            <td className="agenda-date" className="active" rowspan="3">
                                                <div className="dayofmonth">2</div>
                                                <div className="dayofweek">Saturday</div>
                                                <div className="shortdate text-muted">September, 2021</div>
                                            </td>
                                            <td className="agenda-time">
                                                6:00 AM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Breakfast
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                7:00 AM - 7:00 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Activities
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                8:00 PM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    Dinner and animation
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-date" className="active" rowspan="3">
                                                <div className="dayofmonth">3</div>
                                                <div className="dayofweek">Sunday</div>
                                                <div className="shortdate text-muted">September, 2021</div>
                                            </td>
                                            <td className="agenda-time">
                                                7 AM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    <i className="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
                                                    Breakfast
                                                </div>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className="agenda-time">
                                                8 AM
                                            </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    <i className="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
                                                Camp site cleaning
                                            </div>
                                            </td>
                                        </tr><tr>
                                            <td className="agenda-time">
                                                9 AM
                                             </td>
                                            <td className="agenda-events">
                                                <div className="agenda-event">
                                                    <i className="glyphicon glyphicon-repeat text-muted" title="Repeating event"></i>
                                                    Event closure
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
