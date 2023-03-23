import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <div className="HeroVideo-inner">
      <div className="Video">
       {/*  <image /> */}
      </div>
      <div className="HeroVideo-content">
        <h1>Hello World!</h1>
        <p className="u-subheadline u-underline">Welcome to HELLO</p>
        <p className="text-base">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
}

export default Hero;
