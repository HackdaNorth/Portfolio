/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Index.js
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines routes for BrowserRouter
 * 
 **/

//import depend
import React from "react";
import ReactDOM from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
//import pages
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import About from "./pages/About";
//CSS
import "./style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Landing />} />
        <Route path="Experience" element={<Experience />} />
        <Route path="Education" element={<Education />} />
        <Route path="About" element={<About />} />
        <Route path="Contact" element={<Contact />} />
        <Route path="*" element={<Landing />} />
      </Route>
    </Routes>
  </BrowserRouter>
);


