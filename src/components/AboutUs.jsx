

import React from 'react';
import './AboutUs.css';
import backgroundImg from '../assets/backg2.jpeg'; // Replace with your background image path


import teamMember1 from '../assets/g1.jpeg'; // Replace with actual image paths
import teamMember2 from '../assets/j2.jpeg';
import teamMember3 from '../assets/j3.jpeg';
import teamMember4 from '../assets/j4.jpg';
import teamMember5 from '../assets/j5.jpeg';

const teamMembers = [
  { name: 'Member 1', role: 'Role 1', branch: 'Branch 1', year: 'Year 1', img: teamMember1 },
  { name: 'Member 2', role: 'Role 2', branch: 'Branch 2', year: 'Year 2', img: teamMember2 },
  { name: 'Member 3', role: 'Role 3', branch: 'Branch 3', year: 'Year 3', img: teamMember3 },
  { name: 'Member 4', role: 'Role 4', branch: 'Branch 4', year: 'Year 4', img: teamMember4 },
  { name: 'Member 5', role: 'Role 5', branch: 'Branch 5', year: 'Year 5', img: teamMember5 },
];

const AboutUs = () => {
  return (
    <div className="about-us">
      <div className="about-us-background"></div>
      <div className="content">
        <h1 className="main-heading">About StoryNexus</h1>
        <div className="project-cards">
          <div className="project-card">StoryNexus brings your stories to life using advanced AI technology.</div>
          <div className="project-card">Create stories in the style of your favorite authors or generate unique tales.</div>
          <div className="project-card">Our platform makes storytelling accessible and engaging for everyone.</div>
        </div>
        <h2 className="team-heading">Team Members</h2>
        <div className="team-container">
          <div className="team">
            {teamMembers.map((member, index) => (
              <div className="team-card" key={index} style={{ animationDelay: `${index * 0.2}s` }}>
                <img src={member.img} alt={member.name} className="profile-pic" />
                <div className="team-details">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                  <p>{member.branch}</p>
                  <p>{member.year}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
