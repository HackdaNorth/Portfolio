/**
 * Author:    HeckDanNorth
 * Created:   11.03.2023
 * 
 * Class: Profile.jsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a profile component that I can include anywhere.
 * 
 **/

import React, { useState } from "react";
import Navbar from "./Navbar";
import "../style.css";

function Profile() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleDarkMode = () => {
    console.log("dark toggled");
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div >
      <header>
        <div className="profile">
          <img src="imgurl" alt="Profile" />
          <h1 className="pRoot">root</h1> <h1 className="pColon">:</h1>
          <h1 className="pSiggle">~</h1>
          <h1 className="pRest">$ cd ~/.John Doe</h1>
          <p className="contact-info">
            <i className="fa fa-phone"></i> 555-555-5555 <br />
            <i className="fa fa-envelope"></i> john.doe@email.com
          </p>
        </div>

      </header>
      <footer>

      </footer>
    </div>
  );
}

export default Profile;
