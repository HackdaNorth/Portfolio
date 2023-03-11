/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Experience.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a basic Experience page.
 * 
 **/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../pages/Navbar";
import "../style.css";
import Profile from "./Profile";

function Experience() {
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
      <section className="skills">
        <h2 className="pRoot">root</h2>
        <h2 className="pColon">:</h2>
        <h2 className="pSiggle">~</h2>
        <h2 className="pRest">$ cat Skills.txt</h2>
        <ul>
          <li>Javascript</li>
          <li>React</li>
          <li>Node.js</li>
          <li>MongoDB</li>
          <li>CSS</li>
          <li>HTML</li>
          <li>Agile development</li>
          <li>Excellent written and verbal communication skills</li>
        </ul>
      </section>

      <section className="experience">
        <h2 className="pRoot">root</h2>
        <h2 className="pColon">:</h2>
        <h2 className="pSiggle">~</h2>
        <h2 className="pRest">$ sudo Experience</h2>
        <div className="job">
          <h3>Software Engineer, ABC Company</h3>
          <p className="job-date">January 2021 - Present</p>
          <ul>
            <li>
              Develop and maintain web-based applications using React, Node.js,
              and MongoDB.
            </li>
            <li>
              Design and implement RESTful APIs for data access and
              manipulation.
            </li>
            <li>
              Collaborate with cross-functional teams to identify and resolve
              software issues.
            </li>
          </ul>
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

export default Experience;
