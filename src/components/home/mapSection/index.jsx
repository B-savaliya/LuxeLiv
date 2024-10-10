import React, { useState, useEffect } from 'react';
import './map.scss';

const MapSection = () => {
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {
        if ("geolocation" in navigator) {
            navigator.geolocation.getCurrentPosition(
                position => {
                    setUserLocation({
                        lat: position.coords.latitude,
                        lng: position.coords.longitude
                    });
                },
                error => {
                    console.error("Error getting location:", error);
                    // Fallback to a default location (e.g., Surat, Gujarat)
                    setUserLocation({ lat: 21.1702, lng: 72.8311 });
                }
            );
        } else {
            console.log("Geolocation is not available in this browser.");
            // Fallback to a default location
            setUserLocation({ lat: 21.1702, lng: 72.8311 });
        }
    }, []);

    if (!userLocation) {
        return <div>Loading map...</div>;
    }

    const mapUrl = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15000!2d${userLocation.lng}!3d${userLocation.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zM40xMCcwMS4yIk4gNzLCsDQ5JzUyLjAiRQ!5e1!3m2!1sen!2sin!4v1623456789012!5m2!1sen!2sin&markers=color:red%7C${userLocation.lat},${userLocation.lng}`;

    return (
        <div className="map-section">
            <div className="map-container">
                <iframe
                    src={mapUrl}
                    frameBorder="0"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    aria-hidden="false"
                    tabIndex="0"
                ></iframe>
            </div>
        </div>
    );
}

export default MapSection;