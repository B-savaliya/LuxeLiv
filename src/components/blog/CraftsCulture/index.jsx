import React from 'react'
import './crafts&Culture.scss'

const CraftsCulture = ({ images }) => {
    return (
        <div className="crafts-culture" id="crafts-culture">
            <h2>When Crafts Meet Culture</h2>
            <div className='crafts-culture-title-img'>
                <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                    height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                    xmlSpace="preserve">
                    <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                </svg>
            </div>
            <p className="main-description">
                Discover how traditional craftsmanship and cultural heritage shape modern real estate design, creating unique living spaces that tell stories of the past while embracing contemporary comfort.
            </p>
            
            <div className="culture-container">
                <div className="content-wrapper">
                    <div className="text-content">
                        <h3>Artisanal Touches in Modern Homes</h3>
                        <p>
                            Experience the perfect blend of traditional craftsmanship and modern design. Our properties showcase local artistry through handcrafted elements, creating spaces that are both culturally rich and contemporarily sophisticated.
                        </p>
                        <p>
                            From hand-carved details to locally sourced materials, each element tells a story of heritage while meeting modern lifestyle needs. This fusion creates unique living spaces that stand out in today's real estate market.
                        </p>
                    </div>
                    <div className="image-content">
                        <img src={images.blogImg7} alt="Crafts and Culture in Real Estate" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CraftsCulture;
