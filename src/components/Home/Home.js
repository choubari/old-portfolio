import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import homeLogo from "../../Assets/me.jpg";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hello World! <span className="wave">👋🏻</span>
              </h1>

              <h1 className="heading-name">
                I'm
                <strong className="main-name"> Kawtar CHOUABRI</strong>
              </h1>

              <div style={{ padding: 45, textAlign: "left" }}>
                <Type />
              </div>
            </Col>

            <Col md={5}>
              <img
                src={homeLogo}
                style={{ width: "80%" }}
                alt="home pic"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </Container>
      <Home2 />
    </section>
  );
}

export default Home;
