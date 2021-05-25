import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import pdf from "../../Assets/CV_ENGLISH.pdf";
import pdf_fr from "../../Assets/CV_FRENCH.pdf";

function Resume() {
  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf_fr} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Télécharger CV - Français
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience Professionnelle</h3>
            <Resumecontent
              title="Dévelopeur Flutter - Daba'Go"
              date="Juillet 2020 - Aout 2020"
              content={[
                "Développement et implementation d'une library front-end de services réutilisables en utilisant Dart et Flutter.",
                "Réalisation d'une documentation complète et bien détaillée.",
                "Contribution à la conception d'éléments front-end et d'illustrations.",
                "Tester la Beta Version de l'application mobile.",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Ecole National d'Informatique et d'Analyse des Systèmes, ENSIAS"
              date="2019 - 2022"
              content={["Ingénierie du Web et Informatique Mobile"]}
            />
            <Resumecontent
              title="CPGE - Lycee Mohammed 6"
              date="2017 - 2019"
              content={["Classes Préparatoires, Mathematique et Physique (MP)"]}
            />
            <Resumecontent
              title="Lycée El Mansour Eddahbi"
              date="2016 - 2017"
              content={[
                "Baccalaureat Scientifique, Science Mathematique B Option Française",
              ]}
            />
            <h3 className="resume-title">
              Participation aux compétitions de programmation
            </h3>
            <Resumecontent
              title=""
              content={[
                "IEEEXtreme 14.0 : 558",
                "Moroccan Collegiates Programming Contest, MCPC: 21",
                "GirlsCode",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Activités Parascolaires</h3>
            <Resumecontent
              title="Créateur de Contenu [Instagram: @choubari_]"
              content={[
                "Partager des connaissances sur l'informatique avec de beaux articles conçus.",
                "Organiser gratuitement de nombreux webinaires sur le codage et le design.",
                "Faire des sessions de conseil individuelles pendant mon temps libre.",
              ]}
            />
            <Resumecontent
              title="Présidente [IEEE ENSIAS Student Branch]"
              content={[
                "Organisation de nombreuses activités de volontariat et webinaires avec des conférenciers internationaux.",
              ]}
            />
            <Resumecontent
              title="Co-Fondatrice et Program Manager [Morocco IoT & AI Challenge]"
              content={[
                "Organiser les qualifications locales de l'Arab IoT & AI Challenge au Maroc",
                "Organiser des webinars, sessions de formation et de mentorat pour les participants",
                "L'équipe Omnisat du Maroc gagne le premier prix en Arab IoT & AI Challenge (2020, la même année où nous avons organisé la première édition au Maroc)",
              ]}
            />
            <Resumecontent
              title="Graphic Designer [Olympiades ENSIAS]"
              content={[
                "Création des designs de brochures, posts du Social Media, affiches des événemets et photos de couvertures.",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Télécharger CV - English
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
