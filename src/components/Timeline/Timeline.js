import React, { useState } from "react";
import "./Timeline.css";
import TimelineData from "../../data/TimelineData.json";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faArrowDown } from "@fortawesome/free-solid-svg-icons";

const Timeline = () => {
  const experience = TimelineData;
  const [expandedItems, setExpandedItems] = useState([0]);

  const toggleItem = (index) => {
    if (expandedItems.includes(index)) {
      setExpandedItems(expandedItems.filter((item) => item !== index));
    } else {
      setExpandedItems([...expandedItems, index]);
    }
  };

  return (
    <div id="experience" className="timeline-container">
      <h1 className="timeline-heading">Timeline</h1>
      <div className="timeline">
        {experience.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-item-circle"></div>
            <div className="timeline-item-content" oncl>
              <div className="timeline-item-header">
                <span className="timeline-item-date">{item.date}</span>
                <h3 className="timeline-item-title">{item.title}</h3>
                <div className="timeline-item-duration">{item.duration}</div>
                <button
                  className="timeline-item-arrow-btn"
                  onClick={() => toggleItem(index)}
                >
                  <div className="arrow-wrapper">
                    {expandedItems.includes(index) ? (
                      <FontAwesomeIcon icon={faArrowUp} className="arrow-up" />
                    ) : (
                      <FontAwesomeIcon
                        icon={faArrowDown}
                        className="arrow-down"
                      />
                    )}
                  </div>
                </button>
              </div>
              {expandedItems.includes(index) && (
                <>
                  <p className="timeline-item-description">
                    {item.description}
                  </p>
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
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
