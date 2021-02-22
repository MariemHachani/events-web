import React from 'react';
import { Link } from 'react-router-dom';
import './Parallax.css';

const Parallax = () => {
    return (
        <div className="parallax__container">
            <div className="parallax_bg"></div>
            <div className="parallax_content">
                <div>
                    <p className="display-4" >Wanna discover an amazing world?</p>
                    <p className="lead">Only few steps to plan your next adventure!</p>
                    <Link className="btn btn-success" to="">Sign up </Link>
                </div>
                <div>
                    <div className="steps">

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Parallax;
