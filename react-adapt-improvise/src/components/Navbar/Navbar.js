
import React from 'react';
// import {  Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";


export default function Navibar() {
  return (
    <Container>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top" >
    <Container>
    <Navbar.Brand href="/">Brad Evans</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="AboutMe">About Me</Nav.Link>
        <Nav.Link href="Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="ContactForm">Contact</Nav.Link>
        <Nav.Link href="Resume">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </Container>
  )
};
  