/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: About.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a basic About  page. //Further Comments Required
 * 
 **/
import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../pages/Navbar";
import PhotoAlbum from "react-photo-album";
import "../style.css";
import Profile from "./Profile";

const images = [
  {
    id: 1,
    src: "https://pp.iontra.lol/api/v1/t/7d2bd6d1d89f5c007e8cc3f8d108f0a723cb7e21/7rwaalr6/fit_1280",
    alt: "Image 1",
  },
];

function About() {
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
        <section className="objective">
        <h2 className="pRoot">root</h2>
        <h2 className="pColon">:</h2>
        <h2 className="pSiggle">~</h2>
        <h2 className="pRest">$ ls Objective</h2>
        <p>
          To obtain a challenging position in the field of software engineering
          where I can utilize my technical skills and experience to develop
          innovative solutions and contribute to the success of the company.
        </p>
      </section>
        <PhotoAlbum
          layout="columns"
          photos={images}
          columns="1"
          spacing="30"
          padding="5"
          sizes="500px"
        />
      </header>
      <footer>
        <button className="toggle-mode" onClick={toggleDarkMode}>
          {isDarkMode ? "Light Mode" : "Dark Mode"}
        </button>
      </footer>
    </div>
  );
}

export default About;
