import React from 'react'
import './aboutUs.scss'
import teamMemberImg1 from '../../assets/images/h1-team-member-1.jpg'
import teamMemberImg2 from '../../assets/images/h1-team-member-2.jpg'
import teamMemberImg3 from '../../assets/images/h1-team-member-3.jpg'
import teamMemberImg4 from '../../assets/images/team-img-4.jpg'
import teamMemberImg5 from '../../assets/images/team-img-5.jpg'
import teamMemberImg6 from '../../assets/images/team-img-6.jpg'



function AboutUs() {
    const teamData = [
        {
            image: teamMemberImg1,
            name: "Stephanie Lucas",
            position: "Architect",
            description: "Experienced architect with a passion for sustainable design."
        },
        {
            image: teamMemberImg2,
            name: "Nicole Willis",
            position: "Interior Designer",
            description: "Creative designer specializing in modern, functional spaces."
        },
        {
            image: teamMemberImg3,
            name: "Arthur Newman",
            position: "Project Manager",
            description: "Efficient manager ensuring timely completion of all projects."
        },
        {
            image: teamMemberImg4,
            name: "David Brown",
            position: "Architect",
            description: "Creative designer specializing in modern, functional spaces."
        },
        {
            image: teamMemberImg5,
            name: "Emily White",
            position: "Project Manager",
            description: "Efficient manager ensuring timely completion of all projects."
        },
        {
            image: teamMemberImg6,
            name: "Micheal Baker",
            position: "Architect",
            description: "Creative designer specializing in modern, functional spaces."
        }
    ];

    return (
        <div className='about-us'>
            <div className='about-us-container'>
                <div className='about-us-title'>
                    <h1>Our Team</h1>
                    <div className='about-us-title-image'>
                        <svg version="1.1" id="layer_973" xmlns="http://www.w3.org/2000/svg"
                            xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="65.167"
                            height="11.917" viewBox="0 0 65.167 11.917" enableBackground="new 0 0 65.167 11.917"
                            xmlSpace="preserve">
                            <path fill="none" stroke="#010101" strokeWidth="1" strokeMiterlimit="3" d="M1.045,9.833 9.295,2.083 17.295,9.833
                            24.295,2.083 32.291,9.833 39.294,2.083 47.294,9.833 54.294,2.083 64.287,9.833 "></path>
                        </svg>
                    </div>
                </div>
                <div className='about-us-content'>
                    {teamData.map((member, index) => (
                        <div key={index} className='about-us-content-item'>
                            <div className="about-us-content-item-img">
                                <img src={member.image} alt={member.name} />
                                <div className="image-overlay-text">TEAM MEMBER</div>
                            </div>
                            <div className="about-us-content-item-title">
                                <h2>{member.name}</h2>
                                <p>{member.position}</p>
                                <p>{member.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default AboutUs
