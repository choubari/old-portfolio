import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";
import Button from "react-bootstrap/Button";

import pdf_fr from "../../Assets/CV_FRENCH.pdf";
import cover_letter from "../../Assets/lettremotivation-choubari.pdf";
import perso_project from "../../Assets/projetpersonel.pdf";
import pro_project from "../../Assets/projetprofessionel.pdf";
import cid from "../../Assets/CID.pdf";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              Je <span className="purple"> me présente </span>
            </h1>
            <p className="home-about-body">
              Une personne très motivée, dynamique, persévérante et rigoureuse.
              <br />
              <br /> Je suis élève ingénieure en{" "}
              <b className="purple">
                Ingénierie du Web et Informatique Mobile{" "}
              </b>
              à l'ENSIAS, Rabat.
              <br />
              <br />
              Je suis aussi Présidente de l'
              <b className="purple">IEEE ENSIAS Student Branch</b>,
              Co-Fondatrice et Program Manager du
              <b className="purple"> Morocco IoT & AI Challenge</b>, est une
              compétition qui vise à promouvoir la recherche et l'innovation
              dans les domaines de l'intelligence artificielle et l'internet des
              objets.
              <br />
              <br />
              J'effectue aussi la{" "}
              <b className="purple"> création de contenu </b> sur Instagram où
              je mixe entre mes compétences en design graphique, informatique et
              mon esprit de partage des connaissances.
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
            <Button variant="primary" href={pdf_fr} target="_blank">
              <i className="fas fa-download">&nbsp;</i>CV
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="primary" href={cover_letter} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Lettre de motivation
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="primary" href={perso_project} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Projet Personnel
            </Button>
          </Col>
          <Col md={3}>
            <Button variant="primary" href={pro_project} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Projet Professionnel
            </Button>
          </Col>
          <Col md={2}>
            <Button variant="primary" href={cid} target="_blank">
              <i className="fas fa-download">&nbsp;</i>Cartes d'identité
              d'entreprises
            </Button>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>Contact</h1>
            <p>
              N'hésiter pas à me <span className="purple">contacter </span>sur
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
