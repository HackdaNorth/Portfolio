/**
 * Author:    HeckDanNorth
 * Created:   09.03.2023
 * 
 * Class: Layout.tsx
 * 
 * Library: React / React-Photo-Gallery 
 * Description: Defines a basic Layout for use with router. //Further Comments Required
 * 
 **/
import React from "react";
import { Outlet } from "react-router-dom";
import "../style.css";

const Layout = () => {

  return (
    <>
      <Outlet />
    </>
  );
};

export default Layout;
