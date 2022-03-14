import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import shreddit from "../../images/shreddit.png";
import horiseon from "../../images/horiseon.jpg";
import cultural from "../../images/landingBG.jpg"
import ipa from "../../images/APIs-For-IPAs.png";
import notes from "../../images/notes.png";
import code from "../../images/code-quiz.png";
import { VscGithub } from "react-icons/vsc";
import { CgWebsite } from "react-icons/cg"

export default function Portfolio() {
  return (
    <div>
      <br></br>
      <section>
        <h1 id="projects" className="text-white">Projects</h1>
        <div className="my-2">
            <br></br>
          <div className="con1 h3">
            <Row>
            <Col className="projCard">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={cultural}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Cultural-Eats </Card.Title>
                    <Card.Title><a href="https://cultural-eats.herokuapp.com" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Website </a></Card.Title>
                    <Card.Title><a href="https://github.com/JulioRios15/Cultural-eats" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={30} /> Github</a></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col className="projCard">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={shreddit}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Shreddit</Card.Title>
                    <Card.Title><a href="https://app-shreddit.herokuapp.com" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Shreddit </a> </Card.Title>
                    <Card.Title><a href="https://github.com/JulioRios15/Full-Stack-Project" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Github</a></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
            <Col className="projCard">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={ipa}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                  <Card.Title>IPA's for API's</Card.Title>
                  <Card.Title><a href="https://sdesire.github.io/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> IPA's for API's </a> </Card.Title>
                  <Card.Title><a href="https://github.com/sdesire/APIs-For-IPAs/" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Github</a></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              
              <Col className="projCard">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={notes}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                  <Card.Title>Note-Taker</Card.Title>
                  <Card.Title><a href="https://notes-on-notes-heroku.herokuapp.com/" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Note-Taker </a> </Card.Title>
                  <Card.Title><a href="https://github.com/Bradleytevans/notes-on-notes" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Github</a></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
            <Row>
            <Col className="projCard">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={horiseon}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                  <Card.Title>Horiseon</Card.Title>
                  <Card.Title><a href="https://bradleytevans.github.io/challenge1/" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Horiseon </a> </Card.Title>
                  <Card.Title><a href="https://github.com/Bradleytevans/challenge1" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Github</a></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col className="projCard">
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={code}
                    alt="Card image"
                  />
                  <Card.ImgOverlay>
                  <Card.Title>Code-Quiz</Card.Title>
                  <Card.Title><a href="https://bradleytevans.github.io/Code-Quiz/" target="_blank" rel="noreferrer" className="text-white"><CgWebsite size={30} /> Code-Quiz </a> </Card.Title>
                  <Card.Title><a href="https://github.com/Bradleytevans/Code-Quiz" target="_blank" rel="noreferrer" className="text-white"><VscGithub size={25} /> Github</a></Card.Title>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </div>
        </div>
      </section>
      <br></br>
      <br></br>
      <br></br>
    </div>
  );
}
