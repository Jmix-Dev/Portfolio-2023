import React from "react";
import "./About.css";
import astro from "../../images/astro1.png";

function About() {
  return (
    <div id="about" className="about-container">
      <div className="about-inner">
        <div className="about-text">
          <h1>Hi, I'm Joseph</h1>
          <p className="sub-title typewriter">Welcome!</p>
          <p className="text-base">
            As a Fullstack Developer, I thrive on challenges and growth. In my
            free time, I enjoy weightlifting, crafting side projects, spending
            time with loved ones, and exploring music production.{" "}
          </p>
        </div>
        <div className="about-image-container">
          <img className="about-image" src={astro} alt="Me" />
        </div>
      </div>
    </div>
  );
}

export default About;
