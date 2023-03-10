import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";

import reportWebVitals from "./reportWebVitals";
//import depend
import { BrowserRouter } from "react-router-dom";
//import pages
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";

import Navbar from "./pages/Navbar";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Experience from "./pages/Experience";
import About from "./pages/About";

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

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
