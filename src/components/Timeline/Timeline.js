import React from 'react';
import './Timeline.css';

const Timeline = () => {
  const timelineItems = [
    {
      date: "Today",
      title: "Frontend Developer Internship",
      duration: "1 year",
      description: `Since November 2022 I've been exploring the frontend part of development. At Qyre AB im partaking in Developing Qyre's web application. Creating new features, designs, and other implementations. Recently built a section for phone number verification and account linking via OTP. Small team with an agile approach in our development process. Using technologies such as REST API, CSS, React, TypeScript, Git and Cypress.`,
    },
    {
      date: "Nov 2021 - Nov 2022",
      title: "Quality Assurance Technican",
      duration: "1 year",
      description: `Quality assurance testing for Qyre's mobile and web application. Proactively identified bugs and tracked resolutions. Participated in discussions and proposals regarding UI/UX. Collaborated with the development and product team to ensure high quality releases.`,
    },
    {
      date: "August 2021 - June 2023",
      title: "Java Developer",
      duration: "2 years",
      description: `I am currently studying to become a Java Developer at the IT University. Students in this education are trained to become Full-stack developers. The emphasis is on backend development,with a focus on topics such as database development, web services, Java Frameworks, integrations, frontend and agile development., }, { date: 'April 2018 - Nov 2022', title: 'Personal Trainer', duration: '4 years', description: Specialized in working with clients and groups to deliver customized, high-quality training. Results-driven and solution-oriented approach to ensure that each client received the support and coaching they needed to reach their goals, whether they were new to fitness, had a history of injuries, or were at an elite level in their sport. The role required great communication skills, a sense for sales and working on a commission-based salary structure.`,
    },
  ];

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">Timeline</h1>
      <div className="timeline">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-circle"></div>
            <div className="timeline-item-content">
              <div className="timeline-item-header">
                <span className="timeline-item-date">{item.date}</span>
                <h3 className="timeline-item-title">{item.title}</h3>
                <div className="timeline-item-duration">{item.duration}</div>
              </div>
              <p className="timeline-item-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
