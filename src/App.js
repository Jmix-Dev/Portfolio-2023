import React from "react";
import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
/* import Projects from "./components/Projects/Projects" */

function App() {
  return (
    <div className="App">
      <div className="header-and-about-container">
        <Header />
        <About />
      </div>
     {/* <Projects />  */}
    </div>
  );
}

export default App;
