import React from 'react';
import './footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faYoutube } from "@fortawesome/free-brands-svg-icons";
import SlideUp from '../slideup/SlideUp';

const Footer = () => {
    return (
        <footer className="site-footer">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 col-md-6">
                        <h6>About</h6>
                        <p className="text-justify">Jurassic Jungle Adventure <i>The experience we're all waiting for. </i> It's a festival for all moutain's sports. We invite you to join us to discover new sports, meet new people, and have quality time while having fun. You can pick the activities you're willing to practice during the 4 days event. We'll then send you the schedule and your team informations.</p>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Activities</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/category/c-language/">Caving</a></li>
                            <li><a href="http://scanfcode.com/category/front-end-development/">Climbing</a></li>
                            <li><a href="http://scanfcode.com/category/back-end-development/">Mountain Biking</a></li>
                            <li><a href="http://scanfcode.com/category/java-programming-language/">Trekking</a></li>
                            <li><a href="http://scanfcode.com/category/android/">Slackline</a></li>
                            <li><a href="http://scanfcode.com/category/templates/">Camping</a></li>
                        </ul>
                    </div>

                    <div className="col-xs-6 col-md-3">
                        <h6>Quick Links</h6>
                        <ul className="footer-links">
                            <li><a href="http://scanfcode.com/about/">About Us</a></li>
                            <li><a href="http://scanfcode.com/contact/">Contact Us</a></li>
                            <li><a href="http://scanfcode.com/contribute-at-scanfcode/">Sign up</a></li>
                        </ul>
                        <h6>Informations</h6>
                        <ul className="footer-links">
                            <li>Visit us: Maison des jeunes 15 octobre, Bizerte, Tunisia</li>
                            <li>Call us: +216 55055856</li>
                        </ul>
                    </div>
                </div>
                <hr />
            </div>
            <div className="container">
                <SlideUp></SlideUp>
                <div className="d-flex justify-content-center">
                    <ul className="social-icons">
                        <li><a className="facebook" href="/"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        <li><a className="instagram" href="/"><FontAwesomeIcon icon={faInstagram} /></a></li>
                        <li><a className="youtube" href="/"><FontAwesomeIcon icon={faYoutube} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
