import React from 'react';
import './footer.scss';
import footerLogoImg from '../../assets/logo/tempLogoDarkImg.png';
import { Link } from 'react-router-dom';
import { FaFacebook, FaFacebookF, FaPinterest, FaTwitter } from 'react-icons/fa';
import { AiFillInstagram } from 'react-icons/ai';

function Footer() {
    return (
        <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-logo">
                        <Link to={"/"}>
                            <img src={footerLogoImg} alt="footer-logo" />
                        </Link>
                    </div>
                    <div className='footer-content-detailes'>
                        <h2>Sitemap</h2>
                        <div className='footer-content-subDetailes'>
                            <Link to={"/"}>Home</Link>
                            <Link >About Us</Link>
                            <Link >Services</Link>
                            <Link >Contact</Link>
                        </div>
                    </div>
                    <div className='footer-content-detailes'>
                        <h2>Follow Us</h2>
                        <div className='footer-content-social'>
                            <Link>
                                <FaFacebook className='footer-social-media-icon' />
                                <span>Facebook</span>
                            </Link>
                            <Link>
                                <AiFillInstagram className='footer-social-media-icon' />
                                <span>Instagram</span>
                            </Link>
                            <Link>
                                <FaTwitter className='footer-social-media-icon' />
                                <span>Twitter</span>
                            </Link>
                            <Link>
                                <FaPinterest className='footer-social-media-icon' />
                                <span>pintrest</span>
                            </Link>
                        </div>
                    </div>
                    <div className='footer-content-detailes'>
                        <h2>Contact Us</h2>
                        <div className='footer-content-subDetailes'>
                            <Link to>Email: info@example.com</Link>
                            <Link>Phone: (123) 456-7890</Link>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;