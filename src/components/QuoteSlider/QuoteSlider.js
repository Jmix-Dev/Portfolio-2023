import React from "react";
import "./QuoteSlider.css";

const QuoteSlider = () => {
  const sliderData = [
    {
      Person: "- George Eliot",
      quote: "It is never too late to be who you might have been.",
    },
    {
      Person: "- Eric Butterworth",
      quote: "Don’t go through life, grow through life.",
    },
    {
      Person: "- Jane Goodall",
      quote: "What you do makes a difference, and you have to decide what kind of difference you want to make.",
    },
    {
      Person: "— Ralph Waldo Emerson.",
      quote: "What lies behind us, and what lies before us, are tiny matters compared to what lies within us...",
    },
  ];

  return (
    <div className="slider-container">
      <div className="slider">
        {sliderData.map((item, index) => (
          <div key={index} className="slider-item">
            <p className="quote">{item.quote}</p>
            <h2 className="Person">{item.Person}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default QuoteSlider;
