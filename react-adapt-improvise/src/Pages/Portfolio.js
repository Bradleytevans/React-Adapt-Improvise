import React from "react";
import { Container, Card, Col, Row } from "react-bootstrap";
import shreddit from "../images/shreddit.png";
export default function Portfolio() {
  return (
    <Container>
      <section className="my-5">
        <h1 id="aboutMe">Projects</h1>
        <div className="my-2">
          <h1>Hello! Get to know more about me and my work!</h1>
          <Container>
            <Row>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={shreddit}
                    alt="Card image"
                    width="100px"
                    height="400px"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
              <Col>
                <Card className="bg-dark text-white">
                  <Card.Img
                    src={shreddit}
                    alt="Card image"
                    width="100px"
                    height="400px"
                  />
                  <Card.ImgOverlay>
                    <Card.Title>Card title</Card.Title>
                    <Card.Text>
                      This is a wider card with supporting text below as a
                      natural lead-in to additional content. This content is a
                      little bit longer.
                    </Card.Text>
                    <Card.Text>Last updated 3 mins ago</Card.Text>
                  </Card.ImgOverlay>
                </Card>
              </Col>
            </Row>
          </Container>
        </div>
      </section>
    </Container>
  );
}
