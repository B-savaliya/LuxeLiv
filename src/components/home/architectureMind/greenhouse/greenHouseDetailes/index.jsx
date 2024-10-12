import React, { useState } from "react";
import "./greenhouseDetailes.scss";
import propertyImage from "../../../../../assets/images/property-single-tab-img-1.jpg";
import propertyImageTwo from "../../../../../assets/images/property-single-tab-img-2.jpg";
import propertyImageThree from "../../../../../assets/images/property-single-tab-img-4.jpg";
import { IoLocationOutline } from "react-icons/io5"; // Location icon
import { TbBrightnessUp } from "react-icons/tb"; // Brightness icon
import { LiaStoreAltSolid } from "react-icons/lia"; // Store icon
import { SlDiamond } from "react-icons/sl"; // Diamond icon

export default function GreenhouseDetailes() {
    const [activeSection, setActiveSection] = useState(0); // Set default to 0 for "projectcomplex"

    const detailsArray = [
        {
            projectcomplex: [
                {
                    title: "Delivering High Quality Projects",
                    description:
                        "Discover your dream home tailored to your unique lifestyle and preferences.",
                    image: propertyImage,
                    subdescription:
                        "Our expert team is dedicated to helping you find and customize the perfect home that reflects your personality and meets all your needs. We understand that your home is more than just a place to live; it's an expression of who you are. That's why we work tirelessly to ensure every detail, from layout to finishes, aligns with your vision and enhances your daily life.",
                },
            ],
            icon: <IoLocationOutline /> // Add icon for projectcomplex
        },
        {
            projectpark: [
                {
                    title: "Own the Home Meant for You",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImageTwo,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget. Our experts bring years of industry knowledge and a passion for excellence to each endeavor. From meticulous planning to precise execution, we leverage cutting-edge technologies and best practices to optimize efficiency without compromising on quality. ",
                },
            ],
            icon: <TbBrightnessUp /> // Add icon for projectpark
        },
        {
            projectgallery: [
                {
                    title: "Delivering Great New Projects",
                    description:
                        "We are committed to bringing innovative and high-quality new projects to life.",
                    image: propertyImageThree,
                    subdescription:
                        "Our team of experts works tirelessly to ensure each new project meets the highest standards of quality and exceeds client expectations. We approach every project with a blend of creativity and precision, leveraging our diverse expertise to tackle challenges and seize opportunities. From conceptualization to final delivery, we maintain a rigorous focus on innovation, sustainability, and functionality. ",
                },
            ],
            icon: <LiaStoreAltSolid /> // Add icon for projectgallery
        },
        {
            projectvilla: [
                {
                    title: "Make Your Realty Dreams a Reality",
                    description:
                        "Turn your property aspirations into tangible assets with our expert guidance and support.",
                    image: propertyImage,
                    subdescription:
                        "Our dedicated team of real estate professionals is committed to helping you navigate the market and find the perfect property investment opportunities. With years of experience and in-depth market knowledge, we provide personalized strategies tailored to your unique goals and risk tolerance. We meticulously analyze market trends, property values, and potential growth areas to identify lucrative opportunities that align with your investment objectives.",
                },
            ],
            icon: <SlDiamond /> // Add icon for projectvilla
        },
    ];

    return (
        <div className="greenhouse-details">
            <div className="greenhouse-details-btns">
                {detailsArray.map((project, index) => (
                    <button
                        key={index}
                        onClick={() => setActiveSection(index)}
                        className={`project-button ${activeSection === index ? 'active' : ''}`} // Add 'active' class conditionally
                    >
                        {/* Use the specific icon for each button */}
                        {project.icon}
                        {Object.keys(project)[0]}
                    </button>
                ))}
            </div>

            {/* Render only the active section */}
            {detailsArray[activeSection] && (
                <div className="project-section">
                    {/* Directly access the details of the active section */}
                    {detailsArray[activeSection][Object.keys(detailsArray[activeSection])[0]].map((detail, index) => (
                        <div className="project-item-main" key={index}>
                            <div className="project-item">
                                {/* Only render title, description, and subdescription if they exist */}
                                {detail.title && <h2>{detail.title}</h2>}
                                {detail.description && (
                                    <p className="description">{detail.description}</p>
                                )}
                                {detail.subdescription && (
                                    <p className="subdescription">{detail.subdescription}</p>
                                )}
                            </div>
                            <div className="project-image">
                                {/* Only render the image if it exists */}
                                {detail.image ? (
                                    <img
                                        src={detail.image}
                                        alt={detail.title || "Project Image"}
                                    />
                                ) : (
                                    <p>No Image Available</p> // Optional: Show a message if no image is available
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
}