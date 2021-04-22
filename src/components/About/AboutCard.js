import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hey There, I am <span className="purple">Kawtar CHOUBARI </span>,
            Web & Mobile Engineering Student from{" "}
            <span className="purple"> ENSIAS</span> - Rabat, Morocoo.
            <br />
            <br />
            Apart from being a student, I'm also :
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Graphic Designer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Content Creator
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> IEEE Volunteer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Morocco IoT & AI
              Challenge Co-Founder and Program Manager
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
