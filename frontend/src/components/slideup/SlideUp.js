import React from 'react';
import './SlideUp.css';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SlideUp = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
    return (
        <div className="d-flex justify-content-center" id="go-top">
            <a className="smoothscroll" title="Back to Top" onClick={scrollToTop}>
                <FontAwesomeIcon className="center" icon={faChevronUp}></FontAwesomeIcon>
            </a>
        </div>
    )
}

export default SlideUp
