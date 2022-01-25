import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";
import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom";
import AboutMe from "../AboutMe";
import ContactForm from "../Contact";
import Portfolio from "../Portfolio";
import Resume from "../Resume";
export default function Navibar() {
  return (
    <Navbar
      collapseOnSelect
      expand="sm"
      bg="dark"
      variant="dark pills"
      fixed="top"
      className="navb"
    >
      <Container>
        <BrowserRouter>
          <NavLink activeClassName="active" to="/React-Adapt-Improvise">Bradley Evans</NavLink>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <NavLink activeClassName="active" to="/AboutMe">About Me</NavLink>
              <NavLink activeClassName="active" to="/Projects">Projects</NavLink>
              <NavLink activeClassName="active" to="/ContactForm">ContactForm</NavLink>
              <NavLink activeClassName="active" to="/Resume">Resume</NavLink>
            </Nav>
          </Navbar.Collapse>

          <Routes>
            <Route path="/React-Adapt-Improvise" element={AboutMe()} />
            <Route path="/AboutMe" element={AboutMe()} />
            <Route path="/Projects" element={Portfolio()} />
            <Route path="/ContactForm" element={ContactForm()} />
            <Route path="/Resume" element={Resume()} />
          </Routes>
        </BrowserRouter>
      </Container>
    </Navbar>
  );
}
