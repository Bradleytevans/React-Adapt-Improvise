import React from "react";
// import { Link } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

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
        <Navbar.Brand href="/">Bradley Evans</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Item>
              <Nav.Link href="/AboutMe">About Me</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Projects">Projects</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/ContactForm">Contact</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link href="/Resume">Resume</Nav.Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
