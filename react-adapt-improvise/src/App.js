import React from "react";
import './App.css';
import { Router ,Routes ,Route } from 'react-router-dom';
import AboutMe from './pages/AboutMe';
import ContactForm from './pages/Contact';
import Navbar from './components/Navbar';

function App() {
  return (
        <Router>
          <Navbar />
          <Routes>
            <Route path='/AboutMe' element={AboutMe} />
            <Route path='/ContactForm' element={ContactForm} />
          </Routes>
        </Router>
  );
}

export default App;