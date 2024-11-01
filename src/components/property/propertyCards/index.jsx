import React from "react";
import "./propertyCards.scss";
import propertyData from "../propertyData";

const PropertyCards = () => {
  return (
    <div className="property-cards">
      <div className="property-cards-container">
        <div className="property-card-title">
          <h1>Standard Property</h1>
          <div className="property-card-title-img">
            <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                xmlSpace="preserve">
                <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                    24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
            </svg>
          </div>
        </div>
        <div className="property-card-grid">
          {propertyData.map((property, index) => (
            <div key={index} className="property-card">
              <div className="property-image-container">
                <img
                  src={property.image}
                  alt={property.title}
                  className="property-image"
                />
              </div>
              <div className="property-info">
                <h2 className="property-title">{property.title}</h2>
                <p className="property-location">{property.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyCards;
