import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

export default function Navibar() {
  return (
      <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark pills" fixed="top" className="navb">
        <Container>
          <Navbar.Brand href="/React-Adapt-Improvise">Bradley Evans</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Item className="current">
                <Nav.Link className="current" href="/AboutMe">About Me</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="current" href="/Projects">Projects</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="current" href="/ContactForm">Contact</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link className="current" href="/Resume">Resume</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
  );
}
