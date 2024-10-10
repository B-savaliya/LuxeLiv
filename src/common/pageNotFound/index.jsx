import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.scss'; // Import the stylesheet for styling

const NotFound = () => {
    return (
        <div className="not-found-container">
            <div className="not-found-content">
                <h1>404</h1>
                <h2>Oops! Page Not Found</h2>
                <p>It seems the page you are looking for doesn't exist.</p>
                <Link to="/" className="home-link">Go Back to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;
