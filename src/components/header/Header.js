import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faSearch } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
    return (
        <header className="header">
            <div className="header-top">
                <div className="contact-info">
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
                <span>📞 +245 124586 414</span>
                <div className="account-info">
                    <span>My Account</span>
                </div>
            </div>
            <div className="header-main">
                <img src={logo} alt="Lobnix Logo" className="logo" />
                <nav className="nav-links">
                    <a href="#home">Home</a>
                    <a href="#products">Products</a>
                    <a href="#categories">Categories</a>
                    <a href="#catalogs">Catalogs</a>
                    <a href="#about">About Us</a>
                    <a href="#contact">Contacts Us</a>
                </nav>
                <div className="header-actions">
                    <FontAwesomeIcon icon={faSearch} className="search-icon" />
                    <button className="enquiry-button">Enquiry</button>
                </div>
            </div>
            <hr className="pink-line" />
        </header>
    );
};

export default Header;
