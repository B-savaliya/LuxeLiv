import React, { useState } from "react";
import "./greenhouseDetailes.scss";
import propertyImage from "../../../../../assets/images/property-single-tab-img-1.jpg";
import propertyImageTwo from "../../../../../assets/images/property-single-tab-img-2.jpg";
import propertyImageThree from "../../../../../assets/images/property-single-tab-img-4.jpg";

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
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.We are committed to delivering high-quality projects that meet the needs of our clients.",
                },
            ],
        },
        {
            projectpark: [
                {
                    title: "Delivering High Quality Projects2",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImageTwo,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.We are committed to delivering high-quality projects that meet the needs of our clients.",
                },
            ],
        },
        {
            projectgallery: [
                {
                    title: "Delivering High Quality Projects3",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImageThree,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.We are committed to delivering high-quality projects that meet the needs of our clients.",
                },
            ],
        },
        {
            projectvilla: [
                {
                    title: "Delivering High Quality Projects",
                    description:
                        "We are committed to delivering high-quality projects that meet the needs of our clients.",
                    image: propertyImage,
                    subdescription:
                        "We have a team of experienced professionals who are dedicated to ensuring that every project is completed on time and within budget.We are committed to delivering high-quality projects that meet the needs of our clients.",
                },
            ],
        },
    ];

    return (
        <div className="greenhouse-details">
            <div className="greenhouse-details-btns">
                {detailsArray.map((project, index) => (
                    <button key={index} onClick={() => setActiveSection(index)}>
                        {Object.keys(project)[0]}
                    </button>
                ))}
            </div>

            {detailsArray.map(
                (project, index) =>
                    activeSection === index && (
                        <div key={index} className="project-section">
                            {Object.entries(project).map(
                                ([projectType, details]) => (
                                    <div className="project-item-main" key={projectType}>
                                        <div
                                            key={projectType}
                                            className="project-item"
                                        >
                                            <h2>{details[0].title}</h2>
                                            <p className="description">
                                                {details[0].description}
                                            </p>
                                            <p className="subdescription">
                                                {details[0].subdescription}
                                            </p>
                                        </div>
                                        <div className="project-image">
                                            <img
                                                src={details[0].image}
                                                alt={details[0].title}
                                            />
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    )
            )}
        </div>
    );
}
