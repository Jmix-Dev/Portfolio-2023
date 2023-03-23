import React from "react";
import "./Projects.css";

const MyProjects = () => {
  return (
    <div className="projects-container">
      <div className="project-grid">
        <div className="project-card">
          <img src="./assets/portfolio-img2.jpg" alt="portfolio" />
          <div className="project-details">
            <h3>Developer Portfolio</h3>
            <p>
              <span>React</span>
              <span>Tailwind</span>
              <span>Vite</span>
            </p>
          </div>
        </div>
        <div className="project-card">
          <img src="./assets/deepdream-deadlift2.png" alt="portfolio" />
          <div className="project-details">
            <h3>Training Website</h3>
            <p>
              <span>React</span>
              <span>TypeScript</span>
            </p>
          </div>
        </div>
        <div className="project-card">
          <img
            src="./assets/max-larochelle-uu-Jw5SunYI-unsplash.jpg"
            alt="portfolio"
          />
          <div className="project-details">
            <h3>Weather Website</h3>
            <p>
              <span>Java</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
