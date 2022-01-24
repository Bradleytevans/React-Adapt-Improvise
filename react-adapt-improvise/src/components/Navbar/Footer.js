
import React from 'react';
// import {  Link } from "react-router-dom";
import { Card, Navbar, Container, NavbarBrand } from "react-bootstrap";


export default function Navibar() {
  return (
      <Container>
    <div className="fixed-bottom">  
    <Navbar color="dark">
        <Container>
            <NavbarBrand>Link 1 Link 2 Link 3</NavbarBrand>
        </Container>
    </Navbar>
</div>
</Container>
  )
};
  