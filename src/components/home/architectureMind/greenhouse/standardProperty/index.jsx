import React from "react";
import "./service.scss";
import LuxeApplication from "../../../../../assets/icons/property-custom-icon-1.png";
import Wifi from "../../../../../assets/icons/property-custom-icon-2.png";
import Swimming from "../../../../../assets/icons/property-custom-icon-3.png";
import Parking from "../../../../../assets/icons/property-custom-icon-4.png";
import Gym from "../../../../../assets/icons/property-custom-icon-5.png";
import Outdoor from "../../../../../assets/icons/property-custom-icon-6.png";
import Fireplace from "../../../../../assets/icons/property-custom-icon-7.png";
import Elevator from "../../../../../assets/icons/property-custom-icon-8.png";


const propertyData = [
    {
        image: LuxeApplication,
        title: "Modern Pavillion",
        description: "Sleek, open-concept spaces blending indoor comfort with outdoor aesthetics."
    },
    {
        image: Wifi,
        title: "Apartment Block",
        description: "Efficient, connected living spaces designed for urban comfort and community."
    },
    {
        image: Swimming,
        title: "Unique House",
        description: "Bespoke residential designs that reflect individual style and functionality."
    },
    {
        image: Parking,
        title: "Modern Villa",
        description: "Luxurious, contemporary homes combining elegance with cutting-edge amenities."
    },
    {
        image: Gym,
        title: "Beach House",
        description: "Coastal retreats offering serene living with panoramic ocean views."
    },
    {
        image: Outdoor,
        title: "Garden Center",
        description: "Lush, curated green spaces fostering community and environmental harmony."
    },
    {
        image: Fireplace,
        title: "Skyscraper",
        description: "Towering architectural marvels redefining urban skylines and lifestyles."
    },
    {
        image: Elevator,
        title: "Urban Center",
        description: "Mixed-use developments creating vibrant hubs for work, live, and play."
    }
];

const StandardProperty = () => {
    return (
        <div className="greenhouse-service">
            <div className="service-container">
                <div className="service-title">
                    <h1>Standard Property</h1>
                    <div className="service-title-img">
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                    24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
                <div className="service-grid">
                    {propertyData.map((property, index) => (
                        <div key={index} className="service-card-container">
                            <div className="service-card">
                                <div className="service-image-container">
                                    <img
                                        src={property.image}
                                        alt={property.title}
                                        className="service-image"
                                    />
                                </div>
                                <div className="service-info">
                                    <h2 className="service-title-card">{property.title}</h2>
                                    <p className="service-location">{property.description}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default StandardProperty;
