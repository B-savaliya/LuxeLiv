import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'; // Import the stylesheet for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1 className="fade-in">404</h1>
                <h2 className="fade-in">Oops! Page Not Found</h2>
                <p className="fade-in ">It seems the page you are looking for doesn't exist.</p>
                <Link to="/" className="home-link">Go Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
