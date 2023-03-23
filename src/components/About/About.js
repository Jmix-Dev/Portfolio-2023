import React from "react";
import "./About.css";
import astro from "../../images/astro1.png";

function About() {
  return (
    <div className="about-container">
      <div className="about-inner">
        <div className="about-text">
          <h1>Hi, I'm Joseph</h1>
          <p className="sub-title typewriter">Welcome! </p>
          <p className="text-base">
            I am a Fullstack Developer, embarking on a new adventure! Check out
            my website to learn more about me.{" "}
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
