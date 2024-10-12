import React from "react";
import "./contactusGreenHouse.scss";
import { Link } from "react-router-dom";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const ContactUsGreenHouse = () => {
    return (
        <div className="contact-us-greenhouse">
            <div className="contact-us-greenhouse-container">
                <div className="contact-us-greenhouse-title">
                    <h4>contact us</h4>
                    <h2>Like Our Work?</h2>
                    <div className="contact-us-greenhouse-title-img">
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
                <div className="contact-us-greenhouse-content">
                    <p>Ready to bring your architectural vision to life?</p>
                    <p>Our team of experts is here to turn your dreams into reality.</p>
                    <p>From concept to completion, we're committed to excellence in every project.</p>
                    <div className="contact-us-greenhouse-content-button">
                        <Link to="/contact">Get in Touch </Link>
                        <MdKeyboardDoubleArrowRight size={25} className="contact-us-greenhouse-content-button-icon"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUsGreenHouse;
