/**
 * Author:    HeckDanNorth
 * Created:   11.03.2023
 * 
 * Class: Resume.jsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a download
 * 
 **/

import React, { useState } from "react";
import Navbar from "./Navbar";
import "../style.css";
import Profile from "./Profile";

function Resume() {
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
      <footer>

      </footer>
    </div>
  );
}

export default Resume;
