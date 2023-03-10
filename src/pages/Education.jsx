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
