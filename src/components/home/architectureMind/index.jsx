import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './architectureMind.scss';
import ArchitectureMindImage from '../../../assets/images/architectureImg.jpg';
import propertyFeaturesImg1 from '../../../assets/icons/property-features-icon-1.png';
import propertyFeaturesImg2 from '../../../assets/icons/property-features-icon-2.png';
import propertyFeaturesImg3 from '../../../assets/icons/property-features-icon-3.png';
import propertyFeaturesImg4 from '../../../assets/icons/property-features-icon-4.png';
import propertyFeaturesImg6 from '../../../assets/icons/property-features-icon-6.png';
import propertyFeaturesImg7 from '../../../assets/icons/property-features-icon-7.png';
import propertyFeaturesImg8 from '../../../assets/icons/property-features-icon-8.png';
import propertyFeaturesImg9 from '../../../assets/icons/property-features-icon-9.png';
import leftArrowImg from '../../../assets/icons/arrows_left.png';
import rightArrowImg from '../../../assets/icons/arrows_right.png';
import { Link } from 'react-router-dom';

const ArchitectureMind = () => {
    const propertyFeatures = [
        { img: propertyFeaturesImg1, value: '1,000', label: 'Parking' },
        { img: propertyFeaturesImg2, value: '2,000', label: 'House Units' },
        { img: propertyFeaturesImg3, value: '2.5M', label: 'Green Area' },
        { img: propertyFeaturesImg4, value: '1,500', label: 'Apartments' },
        { img: propertyFeaturesImg6, value: '200', label: 'Storages' },
        { img: propertyFeaturesImg7, value: '1.8M', label: 'Site Area' },
        { img: propertyFeaturesImg8, value: '20', label: 'Spa Center' },
        { img: propertyFeaturesImg9, value: '$5BN', label: 'Total Value' },
    ];

    const CustomPrevArrow = (props) => (
        <div className="custom-arrow prev" onClick={props.onClick}>
            <img src={leftArrowImg} alt="Previous" />
        </div>
    );

    const CustomNextArrow = (props) => (
        <div className="custom-arrow next" onClick={props.onClick}>
            <img src={rightArrowImg} alt="Next" />
        </div>
    );

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />
    };

    return (
        <div>
            <div className="architecture-mind-container">
                <div className="architecture-mind-content">
                    <div className="architecture-mind-text">
                        <h2>Architecture with people in mind.</h2>
                        <p>Architecture with people in mind focuses on creating spaces that prioritize the
                            well-being, comfort, and needs of those who inhabit or interact with them. It's
                            about designing environments that blend functionality with aesthetic beauty,
                            fostering a sense of community and belonging.</p>
                            <Link to="architectureMind/greenhouse">View More</Link>
                    </div>
                    <div className="architecture-mind-image">
                        <img src={ArchitectureMindImage} alt="Architecture Mind" />
                    </div>
                </div>
                <div className="architecture-mind-slider">
                    <Slider {...settings}>
                        {propertyFeatures.map((feature, index) => (
                            <div key={index} className="slider-item">
                                <div className="feature-content">
                                    <img src={feature.img} alt={`Property Feature ${index + 1}`} />
                                    <div className="feature-info">
                                        <span className="feature-value">{feature.value}</span>
                                        <span className="feature-label">{feature.label}</span>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default ArchitectureMind