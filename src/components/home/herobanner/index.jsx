import React, { useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './heroBanner.scss';
import HeroImg1 from '../../../assets/images/heroSlider (1).jpg';
import HeroImg2 from '../../../assets/images/heroSlider (2).jpg';
import HeroImg3 from '../../../assets/images/heroSlider (3).jpg';
import HeroImg4 from '../../../assets/images/heroSlider (4).jpg';
import ArrowLeft from '../../../assets/icons/rs-left-light-Img.png';
import ArrowRight from '../../../assets/icons/rs-right-light-Img.png';
import sliderTitleImg from '../../../assets/icons/slider-titile-Img.png';

const slides = [
    { image: HeroImg1, subtitle: 'APARTMENTS' },
    { image: HeroImg2, subtitle: 'BUSINESS SPACE' },
    { image: HeroImg3, subtitle: 'CREATIVE' },
    { image: HeroImg4, subtitle: 'MODERN HOME' },
];

const CustomPrevArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button className={`${className} custom-arrow custom-prev`} onClick={onClick}>
            <img src={ArrowLeft} alt="Previous" />
        </button>
    );
};

const CustomNextArrow = (props) => {
    const { className, onClick } = props;
    return (
        <button className={`${className} custom-arrow custom-next`} onClick={onClick}>
            <img src={ArrowRight} alt="Next" />
        </button>
    );
};

const HeroBanner = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3500,
        arrows: true,
        prevArrow: <CustomPrevArrow />,
        nextArrow: <CustomNextArrow />,
        beforeChange: (current, next) => setActiveSlide(next),
        afterChange: (current) => {
            setActiveSlide(current);
            setTimeout(() => setShowContent(true), 500); // 500ms delay
        },
    };

    return (
        <div className="home-container">
            <div className="home-content">
                <Slider {...settings}>
                    {slides.map((slide, index) => (
                        <div key={index} className="slide">
                            <img src={slide.image} alt={`Slide ${index + 1}`} />
                            {index === activeSlide && (
                                <div className="slide-content" key={index}>
                                    <div className="slide-title">
                                        <img src={sliderTitleImg} alt="Title decoration" className="left-img" />
                                        <h2>BUILT TO HOME</h2>
                                        <img src={sliderTitleImg} alt="Title decoration" className="right-img" />
                                    </div>
                                    <h3>{slide.subtitle}</h3>
                                </div>
                            )}
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    );
};

export default HeroBanner;


