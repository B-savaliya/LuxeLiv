import React from 'react';
import './footer.scss';
import footerLogoImgLight from '../../assets/logo/Untitled.png';
import { Link, useLocation } from 'react-router-dom';
import { FaFacebook, FaPinterest, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';
import { useEffect } from 'react';

function Footer() {
    const location = useLocation();

    // Scroll to top whenever the location changes
    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, [location]);

    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to={"/"}>
                            <img src={footerLogoImgLight} alt="footer-logo" />
                        </Link>
                    </div>
                    <div className='footer-content-detailes'>
                        <h2>Sitemap</h2>
                        <div className='footer-content-subDetailes'>
                            <Link to="/">Home</Link>
                            <Link to="/about">About Us</Link>
                            <Link to="/service">Services</Link>
                            <Link to="/contact">Contact</Link>
                            <Link to="/property">Property</Link>
                            <Link to="/pages">Pages</Link>
                            <Link to="/blog">Blog</Link>
                        </div>
                    </div>
                    <div className='footer-content-detailes'>
                        <h2>Follow Us</h2>
                        <div className='footer-content-social'>
                            <a href='https://www.facebook.com/' target='_blank'>
                                <FaFacebook className='footer-social-media-icon' />
                                <span>Facebook</span>
                            </a>
                            <a href='https://www.instagram.com/accounts/login/' target='_blank'>
                                <AiFillInstagram className='footer-social-media-icon' />
                                <span>Instagram</span>
                            </a>
                            <a href='https://x.com/' target='_blank'>
                                <FaTwitter className='footer-social-media-icon' />
                                <span>Twitter</span>
                            </a>
                            <a href='https://in.pinterest.com/#top' target='_blank'>
                                <FaPinterest className='footer-social-media-icon' />
                                <span>pintrest</span>
                            </a>
                        </div>
                    </div>
                    <div className='footer-content-detailes'>
                        <h2>Contact Us</h2>
                        <div className='footer-content-subDetailes'>
                            <Link to="Email: info@example.com">Email: info@example.com</Link>
                            <Link>Phone: (123) 456-7890</Link>
                        </div>
                    </div>
                </div>
                <div className='footer-privacy-policy'>
                    <h3>
                        @2024 We Don't Have Policy for This Website
                    </h3>
                </div>
            </div>
        </footer>
    );
}

export default Footer;