import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { MdArrowBack } from 'react-icons/md';
import './blogInsider.scss';

import { blogPosts } from '../index';

import modernArchitecture1 from '../../../../assets/images/blogInsidermodern1.jpg';
import modernArchitecture2 from '../../../../assets/images/blogInsidermodern2.jpg';
import modernArchitecture3 from '../../../../assets/images/blogInsidermodern3.jpg';
import modernArchitecture4 from '../../../../assets/images/blogInsidermodern4.jpg';
import modernArchitecture5 from '../../../../assets/images/blogInsidermodern5.jpg';
import modernArchitecture6 from '../../../../assets/images/blogInsidermodern6.jpg';

import interiorDesign1 from '../../../../assets/images/blogInsiderInterior1.jpg';
import interiorDesign2 from '../../../../assets/images/blogInsiderInterior2.jpg';
import interiorDesign3 from '../../../../assets/images/blogInsiderInterior3.jpg';
import interiorDesign4 from '../../../../assets/images/blogInsiderInterior4.jpg';
import interiorDesign5 from '../../../../assets/images/blogInsiderInterior5.jpg';
import interiorDesign6 from '../../../../assets/images/blogInsiderInterior6.jpg';

import smartHomes1 from '../../../../assets/images/blogSmartHome1.jpeg';
import smartHomes2 from '../../../../assets/images/blogSmartHome2.jpeg';
import smartHomes3 from '../../../../assets/images/blogSmartHome3.jpeg';
import smartHomes4 from '../../../../assets/images/blogSmartHome4.jpeg';
import smartHomes5 from '../../../../assets/images/blogSmartHome5.jpeg';
import smartHomes6 from '../../../../assets/images/blogSmartHome6.jpeg';

import luxuryEstates1 from '../../../../assets/images/blogLuxuryImg1.jpeg';
import luxuryEstates2 from '../../../../assets/images/blogLuxuryImg2.jpeg';
import luxuryEstates3 from '../../../../assets/images/blogLuxuryImg3.jpeg';
import luxuryEstates4 from '../../../../assets/images/blogLuxuryImg4.jpeg';
import luxuryEstates5 from '../../../../assets/images/blogLuxuryImg5.jpeg';
import luxuryEstates6 from '../../../../assets/images/blogLuxuryImg6.jpeg';

const imagesets = {
    modernArchitecture: [modernArchitecture1, modernArchitecture2, modernArchitecture3, modernArchitecture4, modernArchitecture5, modernArchitecture6],
    luxuryEstates: [luxuryEstates1, luxuryEstates2, luxuryEstates3, luxuryEstates4, luxuryEstates5, luxuryEstates6],
    interiorDesign: [interiorDesign1, interiorDesign2, interiorDesign3, interiorDesign4, interiorDesign5, interiorDesign6],
    smartHomes: [smartHomes1, smartHomes2, smartHomes3, smartHomes4, smartHomes5, smartHomes6]
};

const BlogInsider = () => {
    const { postId } = useParams();
    const navigate = useNavigate();
    const post = blogPosts[parseInt(postId, 10)];

    const handleBackClick = () => {
        navigate('/', { state: { scrollToFromOurBlog: true } });
    };

    if (!post) {
        return <div className="blog-insider">Blog post not found</div>;
    }

    const additionalImages = imagesets[post.type] || [];

    return (
        <div className='blog-insider'>
            <button onClick={handleBackClick} className='back-button'>
                <MdArrowBack className='back-arrow' /> Back
            </button>
            <div className='blog-insider-hero' style={{ backgroundImage: `url(${post.image})` }}>
                <div className='blog-insider-hero-content'>
                    <h1 className='blog-insider-title'>{post.title}</h1>
                    <div className='blog-insider-title-underline'>
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="currentColor" strokeWidth="2" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                        24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
            </div>
            <div className='blog-insider-content'>
                <p className='blog-insider-description'>{post.description}</p>
                <div className='blog-insider-gallery'>
                    {additionalImages.map((img, index) => (
                        <div key={index} className={`blog-insider-gallery-item item-${index + 1}`}>
                            <img src={img} alt={`${post.title} additional image ${index + 1}`} />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default BlogInsider;
