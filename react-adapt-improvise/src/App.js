import React from "react";
import './App.css';
import AboutMe from './components/pages/AboutMe'
import Navibar from "./components/Navbar/Navbar";
import {Route, BrowserRouter as Router} from "react-router-dom";
function App() {
  return (
    <div className="App">
        <Navibar></Navibar>
        <h1>Hello</h1>
        </div>
  );
}

export default App;