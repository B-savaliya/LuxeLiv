import React from "react";
import "./PropertyCards.scss";
import propertyData from "../propertyData";

const PropertyCards = () => {
  return (
    <div className="property-cards">
      <div className="property-cards-container">
        <div className="property-card-title">
          <h1>Standard Property</h1>
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
