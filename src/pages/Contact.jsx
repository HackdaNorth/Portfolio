/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Contact.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a basic Gallery Page, for personal photos.
 * 
 **/

import React, { useState } from "react";
import Navbar from "../pages/Navbar";
import "../style.css";

function Contact() {
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

export default Contact;
