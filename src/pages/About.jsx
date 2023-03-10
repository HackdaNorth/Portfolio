import React, { useState } from "react";
import ReactDOM from "react-dom";
import Navbar from "../pages/Navbar";
import PhotoAlbum from "react-photo-album";
import "../App.css";

const images = [
  {
    id: 1,
    src: "https://pp.iontra.lol/api/v1/t/249b1e344f0b321058cf1d23767c28c56052a63a/7rwaalr6/fit_1280",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "https://pp.iontra.lol/api/v1/t/7d2bd6d1d89f5c007e8cc3f8d108f0a723cb7e21/7rwaalr6/fit_1280",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "https://pp.iontra.lol/api/v1/t/6238473f71eee7ecbde60707bb90a93e54351a75/7rwaalr6/fit_1280",
    alt: "Image 3",
  },
  {
    id: 4,
    src: "https://pp.iontra.lol/api/v1/t/aea63991f631fa8060e2b1f1704a62b5b98877db/7rwaalr6/fit_1280",
    alt: "Image 4",
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
