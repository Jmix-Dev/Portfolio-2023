import React from "react";
import "./Projects.css";

const MyProjects = () => {
  return (
    <div className="projects-container">
      <div className="project-text--container">
        <div className="project-text--inner">
          <div className="project-text--text">
            <h1>Projects</h1>
            <p className="project-sub-title-typewriter">
              "What lies behind us, and what lies before us, are tiny matters
              compared to what lies within us..." —Ralph Waldo Emerson.
            </p>
            <p className="text-base">
              These are some of the projects I have completed, contributed to,
              or am currently working on...{" "}
            </p>
          </div>
          <div className="project-text--image-container"></div>
        </div>
      </div>
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
