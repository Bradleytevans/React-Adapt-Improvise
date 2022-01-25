import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import shreddit from "../../images/shreddit.png";
import horiseon from "../../images/horiseon.jpg";
import ipa from "../../images/APIs-For-IPAs.png";
import notes from "../../images/notes.png";
import runbuddy from "../../images/Runbuddy.jpg";
import code from "../../images/code-quiz.png";
import ParticlesBg from 'particles-bg';
import { VscGithub } from "react-icons/vsc";

export default function Portfolio() {
  return (
    <Container className="overflow">
      <section>
        <h1 id="projects" className="text-white">Projects</h1>
        <div className="my-2">
            <br></br>
          <Container className="con1 h3">
            <Row>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={shreddit}
                    alt="Card image"
                  />
                  <Card.ImgOverlay id="mouse_over">
                    <Card.Title><a href="https://app-shreddit.herokuapp.com" target="_blank" rel="noreferrer" className="text-white">Shreddit</a> <a href="https://github.com/JulioRios15/Full-Stack-Project" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /></a></Card.Title>
                    <Card.Text>Fullstack</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={ipa}
                    alt="Card image"
                  />
                  <Card.ImgOverlay id="mouse_over">
                  <Card.Title><a href="https://sdesire.github.io/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white">IPA's for API's</a> <a href="https://github.com/sdesire/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /></a></Card.Title>
                  <Card.Text>Fullstack</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={horiseon}
                    alt="Card image"
                  />
                  <Card.ImgOverlay id="mouse_over">
                  <Card.Title><a href="https://bradleytevans.github.io/challenge1/" target="_blank" rel="noreferrer" className="text-white">Horiseon</a> <a href="https://github.com/Bradleytevans/challenge1" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /></a></Card.Title>
                  <Card.Text>HTML CSS</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={notes}
                    alt="Card image"
                  />
                  <Card.ImgOverlay id="mouse_over">
                  <Card.Title><a href="https://notes-on-notes-heroku.herokuapp.com/" target="_blank" rel="noreferrer" className="text-white">Note-Taker</a> <a href="https://github.com/Bradleytevans/notes-on-notes" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /></a></Card.Title>
                  <Card.Text>Express Node</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={runbuddy}
                    alt="Card image"
                  />
                  <Card.ImgOverlay id="mouse_over">
                  <Card.Title><a href="https://bradleytevans.github.io/run-buddy/" target="_blank" rel="noreferrer" className="text-white">Run-buddy</a> <a href="https://github.com/Bradleytevans/run-buddy" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /></a></Card.Title>
                  <Card.Text>HTML CSS</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={code}
                    alt="Card image"
                  />
                  <Card.ImgOverlay id="mouse_over">
                  <Card.Title><a href="https://bradleytevans.github.io/Code-Quiz/" target="_blank" rel="noreferrer" className="text-white">Code-Quiz</a> <a href="https://github.com/Bradleytevans/Code-Quiz" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /></a></Card.Title>
                  <Card.Text>HTML CSS JS</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
      <ParticlesBg type="cobweb" color="#0000FF" num={30} bg={true} />
    </Container>
  );
}
