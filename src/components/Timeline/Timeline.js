import React from "react";
import "./Timeline.css";
import TimelineData from "../../data/TimelineData.json";

const Timeline = () => {
  const experience = TimelineData;

  return (
    <div className="timeline-container">
      <h1 className="timeline-heading">Timeline</h1>
      <div className="timeline">
        {experience.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-circle"></div>
            <div className="timeline-item-content">
              <div className="timeline-item-header">
                <span className="timeline-item-date">{item.date}</span>
                <h3 className="timeline-item-title">{item.title}</h3>
                <div className="timeline-item-duration">{item.duration}</div>
              </div>

              <p className="timeline-item-description">{item.description}</p>
              {item.mentions && (
                <ul className="timeline-item-mentions">
                  {item.mentions.map((mention, index) => (
                    <li key={index}>{mention}</li>
                  ))}
                </ul>
              )}
              {item.technologies && (
                <div className="timeline-item-technologies">
                  {item.technologies.map((technology, index) => (
                    <span key={index} className="technology-button">
                      {technology}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;