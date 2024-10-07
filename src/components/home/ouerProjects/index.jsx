import React from 'react'
import './ourProjects.scss'
import propertyImg1 from '../../../assets/images/property-f-img-1.jpg'
import propertyImg2 from '../../../assets/images/property-f-img-2.jpg'

const OurProjects = () => {
    return (
        <div>
            <div className="our-projects-container">
                <div className="our-projects-header">
                    <h6 className="our-projects-label">Our Gallary</h6>
                    <h1 className="our-projects-title">Other Projects</h1>
                    <div className="our-projects-title-img">
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
                <div className="our-projects-content">
                    <div className="our-projects-content-item">
                        <div className="our-projects-content-item-img">
                            <img src={propertyImg1} alt="Residential House" />
                            <div className="image-overlay-text">ARCHITECT COMMIT</div>
                        </div>
                        <div className="our-projects-content-item-title">
                            <h2>Residential House</h2>
                            <p>A residential house is a private dwelling designed for individuals or families,
                                offering comfort, privacy, and personal living space.</p>
                        </div>
                    </div>
                    <div className="our-projects-content-item">
                        <div className="our-projects-content-item-img">
                            <img src={propertyImg2} alt="Rooftop Apartment" />
                            <div className="image-overlay-text">ARCHITECT COMMIT</div>
                        </div>
                        <div className="our-projects-content-item-title">
                            <h2>Rooftop Apartment</h2>
                            <p>A rooftop apartment is a living space located on the top floor of a building,
                                often featuring scenic views, outdoor terraces, and a unique urban living
                                experience.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default OurProjects
