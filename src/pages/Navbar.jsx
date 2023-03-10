import React from 'react';
import { BrowserRouter, Route, Link } from "react-router-dom";
import '../App.css';



function Navbar() {
  return (
    <nav>
    <ul className="nb" >
      <li className="nb" ><Link to="/" >Home</Link></li>
      <li className="nb" ><Link to="/Education" >Education</Link></li>
      <li className="nb" ><Link to="/Experience" >Experience</Link></li>
      <li className="nb" ><Link to="/About" >About</Link></li>
      <li className="nb" ><Link to="/Contact" >Contact</Link></li>
    </ul>
  </nav>
  );
}

export default Navbar;