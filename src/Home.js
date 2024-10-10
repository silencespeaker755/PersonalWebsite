import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { ArticleContentList, PersonalIntro } from "./Text/ConstantText.js";
import "./App.css";
import ArticleBlock from "./components/Home/ArticleBlock";
import Footer from "./components/Home/Footer";
import SideBar from "./SideBar.js";

export default function Home() {
  const location = useLocation();

  return (
    <div id="colorlib-page">
      <a href="#" className="js-colorlib-nav-toggle colorlib-nav-toggle">
        <i></i>
      </a>
      <SideBar />
      <Outlet />
    </div>
  );
}
