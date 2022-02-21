import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom"
export default function Navibar() {
  return (
    <Navbar className="navi"
     collapseOnSelect expand="lg" bg="dark" variant="dark"
    >
      <Container>
          <Navbar.Brand as={NavLink} activeClassName="active" to="/">Bradley Evans</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link as={NavLink} activeClassName="active" to="/AboutMe">About Me</Nav.Link>
              <Nav.Link as={NavLink} activeClassName="active" to="/Projects">Projects</Nav.Link>
              <Nav.Link as={NavLink} activeClassName="active" to="/ContactForm">Contact Me</Nav.Link>
              <Nav.Link as={NavLink} activeClassName="active" to="/Resume">Resume</Nav.Link>
            </Nav>
          </Navbar.Collapse>

      </Container>
    </Navbar>
  );
}
