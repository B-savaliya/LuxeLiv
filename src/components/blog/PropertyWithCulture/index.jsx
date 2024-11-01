import React from "react";
import "./propertyWithCulture.scss";

const PropertyWithCulture = ({ images }) => {
    return (
        <div className="property-culture-wrapper" id="property-with-culture">
            <section className="property-with-culture">
                <h2>Property With Culture</h2>
                <div className="property-with-culture-title-img">
                    <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                        height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                        xmlSpace="preserve">
                        <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                    </svg>
                </div>
            </section>

            <div className="additional-content">
                <div className="flex-section">
                    <div className="image-part">
                        <img src={images.blogImg8} alt="Cultural Property Design" />
                    </div>
                    <div className="content-section">
                        <h3>Cultural Heritage in Modern Real Estate</h3>
                        <p>
                            In today's real estate market, properties that blend cultural elements with modern amenities command premium values. These unique spaces not only preserve local heritage but also create distinctive living environments that resonate with buyers seeking authentic experiences. The integration of traditional craftsmanship with contemporary design has become a significant trend in luxury real estate development, with developers increasingly recognizing the value of incorporating cultural elements into their projects.
                        </p>
                    </div>
                </div>

                <div className="flex-section">
                    <div className="content-section">
                        <h3>Investment Value of Cultural Properties</h3>
                        <p>
                            Properties featuring traditional craftsmanship and cultural elements have shown consistent appreciation in value over time. The unique character and irreplaceable artisanal details make these properties increasingly desirable in a market saturated with conventional designs. This trend reflects a growing appreciation for authentic, culturally rich living spaces that offer both historical significance and modern comfort. Investors and homebuyers alike are drawn to these properties for their distinctive character and potential for long-term value appreciation.
                        </p>
                    </div>
                    <div className="image-part">
                        <img src={images.blogImg9} alt="Cultural Property Investment" />
                    </div>
                </div>
            </div>
        </div>
    )
};

export default PropertyWithCulture;