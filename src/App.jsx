import { useState } from "react";
import { Routes, Route, BrowserRouter, useLocation, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar.jsx"
import Footer from "./components/Footer.jsx"
import Homepage from "./pages/Homepage.jsx";
import "./index.css";


export default function App() {
  return (
    <div>
      <Navbar />
      <Homepage/>
      <Footer /> 
    </div>
  )
}

    
