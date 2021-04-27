import React from "react";
import "../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col } from "react-bootstrap";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer">
      <Row>
        <Col md="4" className="footer-copywright">
          <h3>Kawtar CHOUBARI</h3>
        </Col>
        <Col md="4" className="footer-copywright">
          <h3>Copyright © {year}</h3>
        </Col>
        <Col md="4" className="footer-body">
          <ul className="footer-icons">
            <li className="social-icons">
              <a href="https://github.com/choubari" style={{ color: "white" }}>
                <i className="fab fa-github"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.linkedin.com/in/kawtar-choubari-2226b0150/"
                style={{ color: "white" }}
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.instagram.com/choubari_/"
                style={{ color: "white" }}
              >
                <i className="fab fa-instagram"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://twitter.com/choubari_"
                style={{ color: "white" }}
              >
                <i className="fab fa-twitter"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://stackoverflow.com/users/12802591/choubari"
                style={{ color: "white" }}
              >
                <i className="fab fa-stack-overflow"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://dribbble.com/choubari"
                style={{ color: "white" }}
              >
                <i className="fab fa-dribbble"></i>
              </a>
            </li>
            <li className="social-icons">
              <a
                href="https://www.behance.net/choubari"
                style={{ color: "white" }}
              >
                <i className="fab fa-behance"></i>
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
