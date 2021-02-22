import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Nav.css';
import { Dropdown, Nav } from 'react-bootstrap';

const Navigation = () => {
    const [show, handleShow] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 100) {
                handleShow(true);
            } else handleShow(false);
        });
        return () => {
            window.removeEventListener("scroll", () => { handleShow(false); });
        };
    }, []);
    return (
        <header>
            <div className={`nav ${show && "nav__bg"}`}>
                <nav className={`navbar  navbar-expand-md navbar-dark fixed-top `} >
                    <Link className="navbar-brand" to="#">ActiveIt</Link>

                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About</Link>
                            </li>
                        </ul>

                        <Link className="nav-link" to="/Login"><p style={{ color: 'white' }}>Login</p></Link>
                    </div>

                    <Dropdown>
                        <Dropdown.Toggle className="variant" className="navbar-toggler" id="dropdown-basic" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown >
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </Dropdown>
                            <Dropdown href="/About" >
                                <Link className="nav-link" to="/About">About</Link>
                            </Dropdown>
                            <Dropdown>
                                <Link className="nav-link" to="/Login">Login</Link>

                            </Dropdown>

                        </Dropdown.Menu>


                    </Dropdown>
                </nav >
            </div>
        </header >
    )
};

export default Navigation;
