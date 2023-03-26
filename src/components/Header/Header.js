import React from "react";
import "./Header.css";
import logo from "../../images/logo1.png";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <a href="/">
            <img src={logo} alt="YourLogo" />{" "}
            {/* Step 3: Replace the "YourLogo" text with an image element */}
          </a>
        </div>
        <nav className="header-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/services">Projects</a>
            </li>
            <li>
              <a href="/contact">Experience</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
