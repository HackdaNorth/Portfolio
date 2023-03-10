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

      </header>
      <footer>

      </footer>
    </div>
  );
}

export default Education;
