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
            I am a curious Fullstack Developer who loves challenges and the growth that
            comes with them. <br />
            In my free time, I enjoy weightlifting, crafting side projects, and
            exploring music production.
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
