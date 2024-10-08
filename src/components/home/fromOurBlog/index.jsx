import React from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './fromOurBlog.scss';
import fromOurBlogImg1 from '../../../assets/images/blog-post-1.jpg';
import fromOurBlogImg2 from '../../../assets/images/blog-post-2.webp';
import fromOurBlogImg3 from '../../../assets/images/blog-post-3.jpg';
import fromOurBlogImg4 from '../../../assets/images/blog-post-4.jpg';

const FromOurBlog = () => {
    const blogPosts = [
        { image: fromOurBlogImg1, alt: 'Blog post 1', title: 'Modern Architecture', description: 'Exploring the latest trends in modern architectural design.' },
        { image: fromOurBlogImg2, alt: 'Blog post 2', title: 'Sustainable Living', description: 'How sustainable architecture is shaping urban living.' },
        { image: fromOurBlogImg3, alt: 'Blog post 3', title: 'Interior Design', description: 'The most popular interior design trends for 2023.' },
        { image: fromOurBlogImg4, alt: 'Blog post 4', title: 'Smart Homes', description: 'Integrating technology for smarter, more efficient homes.' },
    ];

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

    return (
        <div className='from-our-blog-wrapper'>
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
                            <div key={index} className='from-our-blog-content-item'>
                                <div className='from-our-blog-content-item-img'>
                                    <img src={post.image} alt={post.alt} />
                                </div>
                                <div className='from-our-blog-content-item-description'>
                                    <h3>{post.title}</h3>
                                    <p>{post.description}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </div>
        </div>
    )
}

export default FromOurBlog