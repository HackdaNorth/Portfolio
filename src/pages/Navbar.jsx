/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Navbar.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a basic Navbar //Further Comments Required
 * 
 **/
import React from "react";
import { BrowserRouter, Route, Link } from "react-router-dom";
import "../style.css";

function Navbar() {
  
  return (
    <nav>
      <ul className="nb">
        <li className="nb">
          <Link to="/">Home</Link>
        </li>
        <li className="nb">
          <Link to="/Education">Education</Link>
        </li>
        <li className="nb">
          <Link to="/Experience">Experience</Link>
        </li>
        <li className="nb">
          <Link to="/About">About</Link>
        </li>
        <li className="nb">
          <Link to="/Resume">Download CV</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
