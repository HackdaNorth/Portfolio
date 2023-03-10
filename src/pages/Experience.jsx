import React from "react";
import ReactDOM from "react-dom";
import "../App.css";

function Experience() {
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

export default Experience;
