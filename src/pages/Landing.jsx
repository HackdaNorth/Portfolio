/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Landing.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a landing page with some basic content, for users visting the webpage.
 * 
 **/

import React, { useState } from "react";
// import { Link, animateScroll as scroll } from "react-scroll";
import Navbar from "../pages/Navbar";
import Profile from "../pages/Profile"
import "../style.css";

function Landing() {
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
      <button className="toggle-mode" onClick={toggleDarkMode}>
        {isDarkMode ? "Light Mode" : "Dark Mode"}
      </button>
    </div>
  );
}

export default Landing;
