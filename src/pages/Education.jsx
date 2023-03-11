/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Education.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a basic Education page.
 * 
 **/

import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../pages/Navbar";
import "../style.css";
import Profile from "./Profile";

function Education() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("dark toggled");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={`resume ${isDarkMode ? "dark-mode" : ""}`}>
      <Navbar />
      <header>
        <Profile />
      </header>
      <section className="education">
        <h2 className="pRoot">root</h2>
        <h2 className="pColon">:</h2>
        <h2 className="pSiggle">~</h2>
        <h2 className="pRest">$ man Education</h2>
        <div className="school">
          <h3>University of XYZ</h3>
          <p className="degree">Bachelor of Science in Computer Science</p>
          <p className="grad-date">Graduated: May 2020</p>
        </div>
      </section>
      <footer>
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
      </footer>
    </div>
  );
}

export default Education;
