import React from "react";
import './App.css';
import AboutMe from './Pages/AboutMe';
import ContactForm from './Pages/Contact';
import Home from './Pages/Home'
import Navibar from "./components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import { BrowserRouter, Routes ,Route } from 'react-router-dom';
export default function App() {
  return (
    <div className="App">
        <Navibar></Navibar>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={Home()}/>
        <Route path="/AboutMe" element={AboutMe()}/>
        <Route path="/Portfolio" element={Portfolio()}/>
        <Route path="/ContactForm" element={ContactForm()}/>
        <Route path="/Resume" element={Resume()}/>
        </Routes>
    </BrowserRouter>
    </div>
  );
}
