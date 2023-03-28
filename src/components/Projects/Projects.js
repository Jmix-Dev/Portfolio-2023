import React, { useState, useEffect } from "react";
import { useSwipeable } from "react-swipeable";
import { useInView } from "react-intersection-observer";
import "./Projects.css";
import projectsData from "../../data/projectData.json";
import neonliteStar from "../../images/neonlite-star.png";

const MyProjects = () => {
  const projects = projectsData;

  const [sentences, setSentences] = useState([]);
  const [currentSentence, setCurrentSentence] = useState(0);
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [visibleProjects, setVisibleProjects] = useState(0);

  const handleNext = () => {
    setVisibleProjects((prevVisibleProjects) =>
      Math.min(prevVisibleProjects + 1, projects.length - 3)
    );
  };

  const handlePrev = () => {
    setVisibleProjects((prevVisibleProjects) =>
      Math.max(prevVisibleProjects - 1, 0)
    );
  };

  const swipeHandlers = useSwipeable({
    onSwipedLeft: handleNext,
    onSwipedRight: handlePrev,
  });

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
    <div id="projects" className="projects-container">
      <div className="project-text--container">
        <div className="project-text--image-container">
          <img src={neonliteStar} alt="Profile" />
        </div>
        <div className="project-text--inner">
          <h1 className="projects-section--title">Projects</h1>
          <p className="projects-section--title--text-base">
            These are some of the projects I have finished, had the opportunity
            to partake in, or that I am working on.
          </p>
        </div>
      </div>
      <div className="project-navigation-container">
        <button
          className="navigation-button"
          onClick={handlePrev}
          disabled={visibleProjects === 0}
        >
          Prev
        </button>
        <div className="project-grid" {...swipeHandlers}>
          {projects
            .slice(visibleProjects, visibleProjects + 3)
            .map((project, index) => (
              <div className="project-card" key={index}>
                {project.githubLink ? (
                  <a
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src={project.imgSrc} alt={project.title} />
                    <div className="project-details">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-tech">
                        {project.technologies.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </p>
                    </div>
                  </a>
                ) : (
                  <>
                    <img src={project.imgSrc} alt={project.title} />
                    <div className="project-details">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-tech">
                        {project.technologies.map((tech, i) => (
                          <span key={i}>{tech}</span>
                        ))}
                      </p>
                    </div>
                  </>
                )}
              </div>
            ))}
        </div>
        <button
          className="navigation-button"
          onClick={handleNext}
          disabled={visibleProjects === projects.length - 3}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default MyProjects;
