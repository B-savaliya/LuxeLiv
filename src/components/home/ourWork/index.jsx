import React from 'react';
import './ourWork.scss';

const OurWork = () => {
    return (
        <div className="our-work-wrapper">
            <div className="our-work-container">
                <div className="our-work-header">
                    <div className="our-work-header-content">
                        <span className="our-work-subtitle">CONTACT US</span>
                        <h2 className="our-work-title">Like Our Work?</h2>
                        <div className="our-work-title-img">
                            <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                                xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                                height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                                xmlSpace="preserve">
                                <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                                    24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="our-work-content">
                    <div className="our-work-content-item">
                        <p>Have a vision? Let's bring it to life. Our team is ready to turn your ideas into reality.</p>
                        <a href="/contact" className="cta-button">Get in Touch</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OurWork;