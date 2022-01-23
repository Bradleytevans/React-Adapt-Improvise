
import React from 'react';
// import {  Link } from "react-router-dom";
import { Navbar, Container, Nav} from "react-bootstrap";


const Navibar = () => {
  return (
    <Container>
    <Navbar collapseOnSelect expand="sm" bg="dark" variant="dark" fixed="top" >
    <Container>
    <Navbar.Brand href="#home">Brad Evans</Navbar.Brand>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="AboutMe">About Me</Nav.Link>
        <Nav.Link href="#Portfolio">Portfolio</Nav.Link>
        <Nav.Link href="#Contact">Contact</Nav.Link>
        <Nav.Link href="#Resume">Resume</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
  </Container>
  )
};
  
export default Navibar;