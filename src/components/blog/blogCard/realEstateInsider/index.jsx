import React from "react"
import { useParams, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import "./realEstateInsider.scss"

const RealEstateInsider = ({ images }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate('/blog', { state: { scrollToFromOurBlog: true } });
    };

    const blogPosts = [
        { 
            id: 1, 
            title: "5 Tips for First-Time Home Buyers", 
            image: images?.blogImg1, 
            excerpt: "Navigate the home buying process with confidence using these expert tips...",
            content: `
                <h3>Understanding the Home Buying Process</h3>
                <p>First-time home buyers often face numerous challenges when entering the real estate market. Here are essential tips to help navigate this important investment:</p>
                
                <h4>1. Get Your Finances in Order</h4>
                <p>Before beginning your home search, ensure your credit score is in good standing and you have sufficient savings for a down payment and closing costs.</p>

                <h4>2. Get Pre-Approved for a Mortgage</h4>
                <p>A pre-approval letter shows sellers you're serious and gives you a clear understanding of your budget.</p>

                <h4>3. Research the Market</h4>
                <p>Understanding local market conditions helps you make informed decisions about when and where to buy.</p>

                <h4>4. Work with Professionals</h4>
                <p>Partner with experienced real estate agents and mortgage professionals who can guide you through the process.</p>

                <h4>5. Consider All Costs</h4>
                <p>Remember to factor in additional expenses like property taxes, insurance, maintenance, and potential HOA fees.</p>
            `
        },
        { 
            id: 2, 
            title: "Real Estate Market Trends 2023", 
            image: images?.blogImg2, 
            excerpt: "Discover the latest trends shaping the real estate market this year...",
            content: `
                <h3>Understanding Market Trends</h3>
                <p>The real estate market in 2023 presents unique opportunities and challenges for buyers and investors alike. Here's what you need to know:</p>
                
                <h4>1. Market Analysis</h4>
                <p>Current market conditions show promising opportunities with steady growth in key areas and emerging neighborhoods.</p>

                <h4>2. Price Dynamics</h4>
                <p>Property values continue to appreciate in prime locations, making strategic investments more important than ever.</p>

                <h4>3. Investment Opportunities</h4>
                <p>Emerging neighborhoods and developing areas offer excellent potential for significant property value appreciation.</p>

                <h4>4. Market Predictions</h4>
                <p>Experts forecast sustained growth in both residential and commercial real estate sectors.</p>

                <h4>5. Strategic Planning</h4>
                <p>Understanding timing and location factors is crucial for maximizing your investment potential in today's market.</p>
            `
        },
        { 
            id: 3, 
            title: "Maximizing ROI on Rental Properties", 
            image: images?.blogImg3, 
            excerpt: "Learn strategies to increase your return on investment for rental properties...",
            content: `
                <h3>Rental Property Investment Guide</h3>
                <p>Maximize your rental property returns with these proven strategies and expert insights:</p>
                
                <h4>1. Location Selection</h4>
                <p>Choose properties in areas with strong rental demand and potential for appreciation in property values.</p>

                <h4>2. Property Management</h4>
                <p>Implement effective management strategies to maintain property value and ensure consistent rental income.</p>

                <h4>3. Tenant Screening</h4>
                <p>Develop a thorough screening process to find reliable, long-term tenants who will care for your property.</p>

                <h4>4. Maintenance Planning</h4>
                <p>Create a proactive maintenance schedule to prevent costly repairs and maintain property value.</p>

                <h4>5. Financial Strategy</h4>
                <p>Optimize your rental pricing and manage expenses effectively to maximize your return on investment.</p>
            `
        },
        { 
            id: 4, 
            title: "The Benefits of Smart Home Technology", 
            image: images?.blogImg4, 
            excerpt: "Explore how smart home features can increase property value and appeal...",
            content: `
                <h3>Smart Home Integration Benefits</h3>
                <p>Discover how modern technology is transforming residential properties and adding significant value:</p>
                
                <h4>1. Enhanced Security</h4>
                <p>Smart security systems provide advanced protection and peace of mind for homeowners and tenants.</p>

                <h4>2. Energy Efficiency</h4>
                <p>Automated climate control and lighting systems help reduce energy consumption and utility costs.</p>

                <h4>3. Convenience Features</h4>
                <p>Smart appliances and home automation systems offer unprecedented convenience and control.</p>

                <h4>4. Property Value</h4>
                <p>Modern smart home features can significantly increase property appeal and market value.</p>

                <h4>5. Future-Proofing</h4>
                <p>Investing in smart technology helps ensure your property remains competitive in the modern market.</p>
            `
        },
        { 
            id: 5, 
            title: "Understanding Property Taxes", 
            image: images?.blogImg5, 
            excerpt: "A comprehensive guide to property taxes for homeowners and investors...",
            content: `
                <h3>Property Tax Guide</h3>
                <p>Navigate the complexities of property taxation with this comprehensive overview:</p>
                
                <h4>1. Tax Assessment</h4>
                <p>Understand how property values are assessed and how this affects your tax obligations.</p>

                <h4>2. Tax Rates</h4>
                <p>Learn about different tax rates and how they vary by location and property type.</p>

                <h4>3. Exemptions</h4>
                <p>Discover potential tax exemptions and how to qualify for reduced property taxes.</p>

                <h4>4. Payment Options</h4>
                <p>Explore various payment methods and scheduling options for property taxes.</p>

                <h4>5. Tax Planning</h4>
                <p>Develop strategies to effectively manage and plan for property tax expenses.</p>
            `
        },
        { 
            id: 6, 
            title: "Eco-Friendly Home Improvements", 
            image: images?.blogImg6, 
            excerpt: "Discover sustainable upgrades that can boost your property's value...",
            content: `
                <h3>Sustainable Home Improvements</h3>
                <p>Learn about eco-friendly upgrades that add value while protecting the environment:</p>
                
                <h4>1. Energy Efficiency</h4>
                <p>Implement energy-saving improvements that reduce utility costs and environmental impact.</p>

                <h4>2. Sustainable Materials</h4>
                <p>Choose eco-friendly building materials for renovations and improvements.</p>

                <h4>3. Water Conservation</h4>
                <p>Install water-saving fixtures and systems to reduce water consumption and costs.</p>

                <h4>4. Green Spaces</h4>
                <p>Create sustainable landscaping that enhances property appeal and supports local ecology.</p>

                <h4>5. Certification Benefits</h4>
                <p>Explore green building certifications that can increase property value and marketability.</p>
            `
        }
    ];

    const currentBlog = blogPosts.find(post => post.id === parseInt(id));

    if (!currentBlog) {
        return <div>Blog post not found</div>;
    }

    return (
        <div className="real-estate-insider">
            <button onClick={handleBackClick} className='back-button'>
                <MdArrowBack className='back-arrow' /> Back
            </button>
            <div className="container">
                <h2>{currentBlog.title}</h2>
                <div className="blog-hero-image">
                    <img src={currentBlog.image} alt={currentBlog.title} />
                </div>
                <div className="blog-content" 
                    dangerouslySetInnerHTML={{ __html: currentBlog.content }}>
                </div>
            </div>
        </div>
    )
}

export default RealEstateInsider;