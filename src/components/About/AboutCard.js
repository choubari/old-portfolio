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
            Salut, je suis <span className="purple">Kawtar CHOUBARI </span>,
            Elève ingénieur en Ingénierie du Web et Informatique Mobile à l'
            <span className="purple"> ENSIAS</span> - Rabat, Maroc.
            <br />
            <br />
            En plus d'être étudiant, je suis :
          </p>
          <ul>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Graphic Designer
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Créateur de Contenu
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Volontaire chez IEEE
            </li>
            <li className="about-activity">
              <i className="far fa-hand-point-right"></i> Co-fondatrice et
              Program Manager du Morocco IoT & AI Challenge
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
