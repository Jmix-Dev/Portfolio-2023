import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
/* import QuoteSlider from "./components/QuoteSlider/QuoteSlider"; */
import Timeline from "./components/Timeline/Timeline";
import Contact from "./components/Contact/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <About />
        {/*      <QuoteSlider /> */}
        <Projects />
        <Timeline />
        <Contact />
      </div>
    </div>
  );
}

export default App;
