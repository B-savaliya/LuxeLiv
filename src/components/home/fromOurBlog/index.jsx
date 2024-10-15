import React, { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './fromOurBlog.scss';
import fromOurBlogImg1 from '../../../assets/images/blog-post-1.jpg';
import fromOurBlogImg2 from '../../../assets/images/blog-post-2.webp';
import fromOurBlogImg3 from '../../../assets/images/blog-post-3.jpg';
import fromOurBlogImg4 from '../../../assets/images/blog-post-4.jpg';

export const blogPosts = [
    { 
        image: fromOurBlogImg1, 
        alt: 'Modern Architecture', 
        title: 'Modern Architecture', 
        description: 'Discover cutting-edge designs shaping our urban landscapes. From sustainable skyscrapers to innovative residential concepts, explore how modern architecture is redefining our living spaces and cityscapes.',
        type: 'modernArchitecture'
    },
    { 
        image: fromOurBlogImg2, 
        alt: 'Luxury Estates', 
        title: 'Luxury Estates', 
        description: 'Step into the world of opulent living. From sprawling mansions to exclusive penthouses, uncover the exquisite details, premium amenities, and breathtaking locations that define the pinnacle of luxury real estate.',
        type: 'luxuryEstates'
    },
    { 
        image: fromOurBlogImg3, 
        alt: 'Interior Design', 
        title: 'Interior Design', 
        description: 'Dive into the latest interior design trends of 2023. From biophilic elements to smart home integration, learn how to transform your living spaces into stylish, functional, and personalized sanctuaries.',
        type: 'interiorDesign'
    },
    { 
        image: fromOurBlogImg4, 
        alt: 'Smart Homes', 
        title: 'Smart Homes', 
        description: 'Explore the future of living with smart home technology. Discover how AI, IoT, and automation are revolutionizing our daily lives, enhancing comfort, security, and energy efficiency in modern homes.',
        type: 'smartHomes'
    }
];

const FromOurBlog = () => {
    const location = useLocation();
    const fromOurBlogRef = useRef(null);
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    useEffect(() => {
        if (location.state?.scrollToFromOurBlog && fromOurBlogRef.current) {
            fromOurBlogRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    }, [location]);

    return (
        <div ref={fromOurBlogRef} className='from-our-blog-wrapper'>
            <div className='from-our-blog-container'>
                <div className='from-our-blog-header'>
                    <h2 className='from-our-blog-title'>From Our Blog</h2>
                    <div className='from-our-blog-title-img'>
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
                <div className='from-our-blog-content'>
                    <Slider {...settings}>
                        {blogPosts.map((post, index) => (
                            <Link to={`/blog/${index}`} key={index} className='from-our-blog-content-item'>
                                <div className='from-our-blog-content-item-img'>
                                    <img src={post.image} alt={post.alt} />
                                </div>
                                <div className='from-our-blog-content-item-description'>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </div>
                            </Link>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FromOurBlog
