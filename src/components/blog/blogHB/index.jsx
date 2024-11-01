import React from "react";
import './blogHB.scss'

const BlogHB = ({ images }) => {
    const handleCategoryClick = (category) => {
        const element = document.getElementById(category);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="hero-banner">
            <img src={images.blogImg4} alt="Modern city skyline" />
            <h1>Real Estate Insights</h1>
            <p>Stay informed with the latest trends, tips, and market analysis in real estate</p>
            <div className="blog-categories">
                <span onClick={() => handleCategoryClick('real-estate-insights')}>Real Estate Insights</span>
                <span onClick={() => handleCategoryClick('market-trends')}>Market Trends</span>
                <span onClick={() => handleCategoryClick('crafts-culture')}>Crafts & Culture</span>
                <span onClick={() => handleCategoryClick('property-with-culture')}>Property With Culture</span>
            </div>
        </div>
    )
};

export default BlogHB;
