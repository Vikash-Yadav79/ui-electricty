import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import product6 from '../../images/p6.png';
import product8 from '../../images/p8.png';

const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-section logo-section">
                    <h2>Lobnix</h2>
                    <p>In cu libero ligula. Fusce eget metus lorem, ac viverra leo. Nullam convallis, arcu vel pellentesque sodales.</p>
                    <div className="social-media">

                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} />
                        </a>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} />
                        </a>

                    </div>
                </div>
                <div className="footer-section latest-news">
                    <h3>Latest News</h3>
                    <div className="news-item">
                        <img src={product6} alt="News 1" />
                        <p>Did son unreserved themselves indulgence its</p>
                    </div>
                    <div className="news-item">
                        <img src={product8} alt="News 2" />
                        <p>Rapturous am eagerness it as resolving household</p>
                    </div>
                </div>
                <div className="footer-section quick-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="www.google.com">Home</a></li>
                        <li><a href="www.facebook.com">About</a></li>
                        <li><a href="www.whatsaap.com">Contact</a></li>
                        <li><a href="www.linkedin.com">Privacy</a></li>
                        <li><a href="www.instagram.com">Skills</a></li>
                        <li><a href="www.meta.com">Career</a></li>
                    </ul>
                </div>
                <div className="footer-section best-seller">
                    <h3>Best Seller</h3>
                    <ul>
                        <li><a href="www.google.com">Flow Indexer NMF1</a></li>
                        <li><a href="www.facebook.com">Melt Flow Indexer NMF1-101</a></li>
                        <li><a href="www.linkedin.com">NMF1-101 Melt Flow Indexer</a></li>
                        <li><a href="www.instagram.com">Videohive</a></li>
                        <li><a href="www.meta.com">Melt Flow Indexer</a></li>
                        <li><a href="www.meta.com">Melt Flow Indexer</a></li>
                    </ul>
                </div>
            </div>
            <div className="footer-bottom">
                <p>© Copyright All rights reserved 2021.</p>
            </div>
        </footer>
    );
}

export default Footer;