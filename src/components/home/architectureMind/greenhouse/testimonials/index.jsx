import React from "react";
import "./testimonials.scss";
import TestimonialsImg from "../../../../../assets/images/testimonals-1.png";
import TestimonialsImg2 from "../../../../../assets/images/testimonals-2.png";
import TestimonialsImg3 from "../../../../../assets/images/testimonals-3.png";

const Testimonials = () => {
    const testimonialData = [
        {
            image: TestimonialsImg,
            content: "Exceptional service and stunning designs! The team's attention to detail and innovative approach transformed our space beyond our expectations. Highly recommend for anyone seeking top-tier architectural solutions.",
            name: "Emily Johnson",
            position: "Homeowner"
        },
        {
            image: TestimonialsImg2,
            content: "Working with this architectural firm was a game-changer for our project. Their creative vision and technical expertise brought our ideas to life in ways we never imagined. The end result is both beautiful and functional.",
            name: "Jane Smith",
            position: "Designer, Studio Inc."
        },
        {
            image: TestimonialsImg3,
            content: "As a fellow architect, I'm impressed by the innovation and precision in their work. They consistently deliver projects that are not only aesthetically pleasing but also structurally sound and environmentally conscious. A true leader in the field.",
            name: "Mike Johnson",
            position: "Architect, Build Co."
        }
    ];

    return (
        <div className="testimonials">
            <div className="testimonials-container">
                <div className="testimonials-title">
                    <h4>HAPPY CUSTOMERS</h4>
                    <h2>Testimonials</h2>
                    <div className="testimonials-title-img">
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
                <div className="testimonials-content">
                    {testimonialData.map((testimonial, index) => (
                        <div key={index} className="testimonials-card">
                            <div className="testimonials-card-img">
                                <img src={testimonial.image} alt={`testimonial-${index + 1}`} />
                            </div>
                            <div className="testimonials-card-content">
                                <p>{testimonial.content}</p>
                                <h3>{testimonial.name}</h3>
                                <h4>{testimonial.position}</h4>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
