import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import projectsData from "../../data/projectData.json";
import neonliteStar from "../../images/neonlite-star.png";

const MyProjects = () => {
  const projects = projectsData;

  const [sentences, setSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });

  useEffect(() => {
    const quote1 = `"What lies behind us, and what lies before us,`;
    const quote2 = `are tiny matters compared to what lies within us..."`;
    const quote3 = `—Ralph Waldo Emerson.`;
    setSentences([quote1, quote2, quote3]);
  }, []);

  useEffect(() => {
    if (inView && currentSentence < sentences.length) {
      const timer = setTimeout(() => {
        setCurrentSentence(currentSentence + 1);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [inView, currentSentence, sentences.length]);

  useEffect(() => {
    if (!inView) {
      setCurrentSentence(0);
    }
  }, [inView]);

  return (
    <div className="projects-container">
      <div className="project-text--container">
        <div className="project-text--image-container">
          <img src={neonliteStar} alt="Profile" />
        </div>
        <div className="project-text--inner">
          <h1 className="projects-section--title">Projects</h1>
          <p className="projects-section--title--text-base">
            These are some of the projects I have finished, had the opportunity
            to partake in, or that I am working on.{" "}
          </p>
        </div>
      </div>
      <div className="projects-cards-container">
        <div className="project-grid">
          {projects.map((project, index) => (
            <div className="project-card" key={index}>
              <img src={project.imgSrc} alt={project.title} />
              <div className="project-details">
                <h3>{project.title}</h3>
                <p>
                  {project.technologies.map((tech, i) => (
                    <span key={i}>{tech}</span>
                  ))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyProjects;
