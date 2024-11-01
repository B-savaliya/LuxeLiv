import React from 'react';
import './blogCard.scss'

const BlogCard = ({ images }) => {
    const blogPosts = [
        { id: 1, title: "5 Tips for First-Time Home Buyers", image: images.blogImg1, excerpt: "Navigate the home buying process with confidence using these expert tips..." },
        { id: 2, title: "Real Estate Market Trends 2023", image: images.blogImg2, excerpt: "Discover the latest trends shaping the real estate market this year..." },
        { id: 3, title: "Maximizing ROI on Rental Properties", image: images.blogImg3, excerpt: "Learn strategies to increase your return on investment for rental properties..." },
        { id: 4, title: "The Benefits of Smart Home Technology", image: images.blogImg4, excerpt: "Explore how smart home features can increase property value and appeal..." },
        { id: 5, title: "Understanding Property Taxes", image: images.blogImg5, excerpt: "A comprehensive guide to property taxes for homeowners and investors..." },
        { id: 6, title: "Eco-Friendly Home Improvements", image: images.blogImg6, excerpt: "Discover sustainable upgrades that can boost your property's value..." }
    ];

    return (
        <div className="blog-card-container" id="real-estate-insights">
            <h2 className="section-title">Latest Real Estate Insights</h2>
            <div className='blog-card-title-img'>
                <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                    height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                    xmlSpace="preserve">
                    <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                </svg>
            </div>
            <p className="section-subtitle">Expert advice and analysis to help you make informed real estate decisions</p>
            <div className="blog-card-grid">
                {blogPosts.map(post => (
                    <div key={post.id} className="blog-card">
                        <div className="blog-card-image" style={{ backgroundImage: `url(${post.image})` }}>
                            <div className="blog-card-overlay">
                                <button className="read-more-btn">Read More</button>
                            </div>
                        </div>
                        <div className="blog-card-content">
                            <h3>{post.title}</h3>
                            <p>{post.excerpt}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogCard;
