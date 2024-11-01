import React from 'react'
import './marketTrends.scss'
import { FaChartLine, FaCity, FaHome, FaMoneyBillWave, FaLeaf, FaHandshake, FaGlobe, FaRobot } from 'react-icons/fa'

const MarketTrends = () => {
    const trends = [
        {
            icon: <FaChartLine />,
            title: 'Price Dynamics',
            description: 'Median home prices have surged 12% year-over-year, with luxury properties seeing a 15% increase in valuation.'
        },
        {
            icon: <FaCity />,
            title: 'Urban Development',
            description: 'City centers are experiencing a renaissance with 20+ mixed-use projects breaking ground, focusing on live-work-play environments.'
        },
        {
            icon: <FaHome />,
            title: 'Suburban Boom',
            description: 'Suburban areas within a 30-mile radius of major cities have seen a 25% increase in demand, driven by remote work trends.'
        },
        {
            icon: <FaMoneyBillWave />,
            title: 'Investment Hotspots',
            description: 'Emerging neighborhoods in the south and southeast are yielding 8-10% annual returns, attracting both local and international investors.'
        },
        {
            icon: <FaLeaf />,
            title: 'Sustainable Living',
            description: 'Green-certified properties command a 6% premium, with 40% of new developments incorporating sustainable features.'
        },
        {
            icon: <FaHandshake />,
            title: 'Co-living Spaces',
            description: 'Co-living arrangements have grown by 30% in urban areas, catering to young professionals and digital nomads seeking flexible, community-oriented living.'
        },
        {
            icon: <FaGlobe />,
            title: 'Global Real Estate',
            description: 'Cross-border real estate investments have increased by 18%, with a focus on emerging markets in Southeast Asia and Latin America.'
        },
        {
            icon: <FaRobot />,
            title: 'PropTech Innovation',
            description: 'AI and blockchain technologies are revolutionizing property management, with 35% of real estate firms adopting these solutions for improved efficiency.'
        }
    ]

    return (
        <section id="market-trends" className="market-trends">
            <h2>Current Market Trends</h2>
            <div className='market-trends-title-img'>
                <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                    height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                    xmlSpace="preserve">
                    <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                </svg>
            </div>
            <div className="trends-container">
                {trends.map((trend, index) => (
                    <div key={index} className="trend-item">
                        <div className="trend-icon">{trend.icon}</div>
                        <h3>{trend.title}</h3>
                        <p>{trend.description}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default MarketTrends;
