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
                    title: "Delivering High Quality Projects1",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImage,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.",
                },
            ],
            icon: <IoLocationOutline /> // Add icon for projectcomplex
        },
        {
            projectpark: [
                {
                    title: "Delivering High Quality Projects2",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImageTwo,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.",
                },
            ],
            icon: <TbBrightnessUp /> // Add icon for projectpark
        },
        {
            projectgallery: [
                {
                    title: "Delivering High Quality Projects3",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImageThree,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.",
                },
            ],
            icon: <LiaStoreAltSolid /> // Add icon for projectgallery
        },
        {
            projectvilla: [
                {
                    title: "Delivering High Quality Projects",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImage,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.",
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