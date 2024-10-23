import React from "react";
import "./contact.scss";
import BgImg from "../../assets/images/real-estate-aesthetic-image-px8ok9r7ygztftoo.jpg";

function Contact() {
  const address = "A-1001, Atlanta Tower, Near VIP Circle, Mota Varachha, Surat - 394101, Gujarat, India";
  const phoneNumber = "+91 261 2345678";
  const email = "info@suratrealestates.com";

  const encodedAddress = encodeURIComponent(address);
  const mapUrl = `https://www.google.com/maps/search/?api=1&query=${encodedAddress}`;

  return (
    <div className="contact">
      <div className="background-image" style={{ backgroundImage: `url(${BgImg})` }}></div>
      <div className="overlay"></div>
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-title-image">
          <svg
            version="1.1"
            id="layer_973"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0"
            y="0"
            width="65.167"
            height="11.917"
            viewBox="0 0 65.167 11.917"
            enableBackground="new 0 0 65.167 11.917"
            xmlSpace="preserve"
          >
            <path
              fill="none"
              stroke="#010101"
              strokeWidth="1"
              strokeMiterlimit="3"
              d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "
            ></path>
          </svg>
        </div>
        <div className="contact-content">
          <div className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <textarea placeholder="Comment"></textarea>
            <button type="submit">Send Message</button>
          </div>
          <div className="contact-info">
            <h2>Get in Touch!</h2>
            <div className="contact-details">
              <ul>
                <li>
                  <a href={mapUrl} target="_blank" rel="noopener noreferrer">
                    <span role="img" aria-label="location">📍</span> {address}
                  </a>
                </li>
                <li>
                  <a href={`tel:${phoneNumber}`}>
                    <span role="img" aria-label="phone">📱</span> {phoneNumber}
                  </a>
                </li>
                <li>
                  <a href={`mailto:${email}`}>
                    <span role="img" aria-label="email">📧</span> {email}
                  </a>
                </li>
              </ul>
            </div>
            <div className="additional-info">
              <p>Office Hours: Mon-Fri, 9 AM - 6 PM</p>
              <p>Follow us on social media for updates!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
