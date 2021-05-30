import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

import Button from "react-bootstrap/Button";
import pdf_en from "../../Assets/CV_ENGLISH.pdf";
import cover_letter from "../../Assets/CV_ENGLISH.pdf";
import perso_project from "../../Assets/PersoProject.pdf";
import pro_project from "../../Assets/ProProject.pdf";
import cid from "../../Assets/CID.pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Let me <span className="purple"> introduce </span> myself
            </h1>
            <p className="home-about-body">
              A highly motivated person, dynamic, persevering and rigorous.
              <br />
              <br /> I'm{" "}
              <b className="purple">Web & Mobile Engineering Student </b>
              at ENSIAS, Rabat.
              <br />
              <br />
              I’m also chair of
              <b className="purple"> IEEE ENSIAS Student Branch</b>, Co-Founder
              and Program Manager of
              <b className="purple"> Morocco IoT & AI Challenge</b>, a capacity
              building and pre-incubation program for students and startups that
              have innovative ideas in the areas of Internet of Things (IoT),
              Artificial Intelligence (AI) and related fields.
              <br />
              <br />
              I'm also a<b className="purple"> content creator </b> on Instagram
              where I mix between my graphic design skills and sharing my coding
              knowledge.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={2}>
            <Button variant="primary" href={pdf_en} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Download CV
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="primary" href={cover_letter} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Cover Letter
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="primary" href={perso_project} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Personal Project
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="primary" href={pro_project} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Professional Project
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="primary" href={cid} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Company Identity Cards
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/choubari"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/choubari_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/kawtar-choubari-2226b0150/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/choubari_/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
