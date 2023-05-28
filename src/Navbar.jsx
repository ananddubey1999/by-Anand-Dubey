import React from "react";
import "./Navbar.css";

const NavigationBar = () => {
  return (
    <nav>
      <ul className="navbar-list">
        <li className="navbar-item">
          <a href="/">Home</a>
        </li>
        <li className="navbar-item">
          <a href="/about">About</a>
        </li>
        <li className="navbar-item">
          <a href="/contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationBar;
