import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-inner">
        <div className="header-logo">
          <a href="/">YourLogo</a>
        </div>
        <nav className="header-menu">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About Me</a>
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
