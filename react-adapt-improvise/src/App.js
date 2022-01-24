import React from "react";
import './App.css';
import AboutMe from './Pages/AboutMe';
import ContactForm from './Pages/Contact';
import Navibar from "./components/Navbar/Navbar";
import Portfolio from "./Pages/Portfolio";
import Resume from "./Pages/Resume";
import Footer from "./components/Navbar/Footer"
import { BrowserRouter, Routes ,Route } from 'react-router-dom';

export default function App() {
  return (
    <div className="App">
        <Navibar></Navibar>
    <BrowserRouter>
        <Routes>
        <Route path="/" element={AboutMe()}/>
        <Route path="/AboutMe" element={AboutMe()}/>
        <Route path="/Portfolio" element={Portfolio()}/>
        <Route path="/ContactForm" element={ContactForm()}/>
        <Route path="/Resume" element={Resume()}/>
        </Routes>
    </BrowserRouter>
      <Footer></Footer>
    </div>
  );
}
