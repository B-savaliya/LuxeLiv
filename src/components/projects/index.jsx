import React from "react";
import "./projects.scss";
import project9 from "../../assets/images/interiorDesign.jpg";
import project2 from "../../assets/images/property-f-img-2.jpg";
import project3 from "../../assets/images/blog-post-2.webp";
import project4 from "../../assets/images/heroSlider (3).jpg";
import project5 from "../../assets/images/modern-villa.jpg";
import project6 from "../../assets/images/lux-apartment.jpg";
import project7 from "../../assets/images/unique-house.jpg";
import project8 from "../../assets/images/skyscraper.jpg";
import project1 from "../../assets/images/dreamHouse.jpg";
import project10 from "../../assets/images/futurasticConcept.jpg";

const OverlaySVG = () => (
  <svg className="overlay-svg" version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
    height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
    xmlSpace="preserve">
    <path className="svg-path" fill="none" stroke="#FFFFFF" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
    24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
  </svg>
);

const Projects = () => {
    return (
        <div className="projects-container">
            <div className="projects-title">
                <h1>Our Projects</h1>
                <div className="projects-title-image">
                    <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                        xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                        height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                        xmlSpace="preserve">
                        <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                    </svg>
                </div>
            </div>
            <div className="projects-content">
                <div className="projects-content-top">
                    <div className="projects-content-top-left">
                        <div className="projects-content-top-left-large project-image-wrapper">
                            <img src={project1} alt="Project 1" className="project-image-large" />
                            <div className="project-image-overlay">
                                <div className="overlay-text">Dream House</div>
                                <OverlaySVG />
                            </div>
                        </div>
                        <div className="projects-content-top-left-small">
                            <div className="project-image-wrapper">
                                <img src={project2} alt="Project 2" className="project-image-small" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Rooftop House</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                            <div className="project-image-wrapper">
                                <img src={project3} alt="Project 3" className="project-image-small" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Business Center</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects-content-top-right project-image-wrapper">
                        <img src={project4} alt="Project 4" className="project-image-full" />
                        <div className="project-image-overlay">
                            <div className="overlay-text">Client's Choice</div>
                            <OverlaySVG />
                        </div>
                    </div>
                </div>
                <div className="projects-content-bottom">
                    <div className="projects-content-bottom-left">
                        <div className="projects-content-bottom-left-top">
                            <div className="project-image-wrapper">
                                <img src={project5} alt="Project 5" className="project-image-small" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Modern Villa</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                            <div className="project-image-wrapper">
                                <img src={project6} alt="Project 6" className="project-image-small" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Luxury Facility</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                        </div>
                        <div className="projects-content-bottom-left-bottom">
                            <div className="project-image-wrapper">
                                <img src={project7} alt="Project 7" className="project-image-wide" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Unique House</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="projects-content-bottom-right">
                        <div className="project-image-wrapper project-image-vertical">
                            <img src={project8} alt="Project 8" className="project-image-full" />
                            <div className="project-image-overlay">
                                <div className="overlay-text">Skyscrapers</div>
                                <OverlaySVG />
                            </div>
                        </div>
                        <div className="projects-content-bottom-right-stack">
                            <div className="project-image-wrapper">
                                <img src={project9} alt="Project 9" className="project-image-small" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Modern Suite</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                            <div className="project-image-wrapper">
                                <img src={project10} alt="Project 10" className="project-image-small" />
                                <div className="project-image-overlay">
                                    <div className="overlay-text">Futuristic House</div>
                                    <OverlaySVG />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Projects;
