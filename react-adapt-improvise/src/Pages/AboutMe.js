import React from "react";
import { Container } from "react-bootstrap";
import profile from '../images/Profile-pic.png';
export default function AboutMe() {
  return (
    <Container>
    <section className="my-5">
      <h1 id="aboutMe">About Me</h1>
      <div className="my-2">
        <h1>
          Hello! Get to know more about me!
        </h1>
        <img src={profile} alt="Brad Evans looking dapper" width="200px" height="200px"></img>
        <p>
          My name is Brad Evans, and I am a full stack web developer who is currently earning a certification from UCF for Full Stack Web Development.
          <br></br>
        
        </p>
      </div>
    </section>
    </Container>
  );
}


