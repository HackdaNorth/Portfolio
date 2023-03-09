import React, { useState } from 'react';
import { Link, animateScroll as scroll } from "react-scroll";
import './App.css';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("dark toggled");
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`resume ${isDarkMode ? 'dark-mode' : ''}`}>
      <nav>
        <ul className="nb" >
          <li className="nb" ><Link to="objective" spy={true} smooth={true} duration={500} delay={400}>About me</Link></li>
          <li className="nb" ><Link to="education" spy={true} smooth={true} duration={500} delay={400}>Education</Link></li>
          <li className="nb" ><Link to="experience" spy={true} smooth={true} duration={500} delay={400}>Experience</Link></li>
          <li className="nb" ><Link to="skills" spy={true} smooth={true} duration={500} delay={400}>Skills</Link></li>
        </ul>
      </nav>
      <header>
        <div className="profile">
          <img src="bitmojiavatar.png" alt="Profile" />
          <h1 className="pRoot">root</h1> <h1 className="pColon">:</h1><h1 className="pSiggle">~</h1><h1 className="pRest">$ cd ~/.John Doe</h1>
          <p className="contact-info">
            <i className="fa fa-phone"></i> 555-555-5555 <br />
            <i className="fa fa-envelope"></i> john.doe@email.com
          </p>
        </div>
      </header>
      <section className="objective">
        <h2 className="pRoot">root</h2><h2 className="pColon">:</h2><h2 className="pSiggle">~</h2><h2 className="pRest">$ ls Objective</h2>
        <p>
          To obtain a challenging position in the field of software engineering where I can utilize my technical skills and experience to develop innovative solutions and contribute to the success of the company.
        </p>
      </section>
      <section className="education">
        <h2 className="pRoot">root</h2><h2 className="pColon">:</h2><h2 className="pSiggle">~</h2><h2 className="pRest">$ man Education</h2>
        <div className="school">
          <h3>University of XYZ</h3>
          <p className="degree">Bachelor of Science in Computer Science</p>
          <p className="grad-date">Graduated: May 2020</p>
        </div>
      </section>
      <section className="experience">
        <h2 className="pRoot">root</h2><h2 className="pColon">:</h2><h2 className="pSiggle">~</h2><h2 className="pRest">$ sudo Experience</h2>
        <div className="job">
          <h3>Software Engineer, ABC Company</h3>
          <p className="job-date">January 2021 - Present</p>
          <ul>
            <li>Develop and maintain web-based applications using React, Node.js, and MongoDB.</li>
            <li>Design and implement RESTful APIs for data access and manipulation.</li>
            <li>Collaborate with cross-functional teams to identify and resolve software issues.</li>
          </ul>
        </div>
      </section>
      <section className="skills">
       <h2 className="pRoot">root</h2><h2 className="pColon">:</h2><h2 className="pSiggle">~</h2><h2 className="pRest">$ cat Skills.txt</h2>
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
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
}

export default App;
