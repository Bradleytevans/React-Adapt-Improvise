import React from "react";
import { Container } from "react-bootstrap";
import ParticlesBg from "particles-bg";
export default function Resume() {
  return (
    <Container>
    <section className="my-5">
      <h1 id="aboutMe">Resume</h1>
      <div className="my-2">
        <h1>
          Hello! Get to know more about me and my work life!
        </h1>
      </div>
    </section>
    <ParticlesBg type="cobweb" color="#FFA500" num={30} bg={true} />
    </Container>
  );
}