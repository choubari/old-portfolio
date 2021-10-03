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
            <i className="fas fa-download">&nbsp;</i>Download CV - French
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="React Native Developer - RifTech"
              date="July 2021 - October 2021"
              content={[
                "Contributing to the developement of a centralized medical system.",
                "UX/UI design of the interfaces.",
                "Developping the mobile application for patients with React Native.",
                "Interconnecting the backend and the mobile app with APIs.",
              ]}
            />
            <Resumecontent
              title="UX/UI & Front-End Developer - Orange Maroc"
              date="July 2021 - August 2021"
              content={[
                "Brainstorming and choosing a problematic in the HeathTech field",
                "Designing the brand identity and UX/UI of the project.",
                "Developping the front-end ot the web application.",
                "Linking the Front part with back-end and hardware (RaspberryPI) using APIs.",
              ]}
            />
            <Resumecontent
              title="Flutter Developer - Daba'Go"
              date="July 2020 - August 2020"
              content={[
                "Developping and implementing a library of front-end reusable services using Dart and Flutter.",
                "Documenting every piece of code I wrote.",
                "Contributing to designing front-end elements and illustrations.",
                "Beta tester of the mobile application.",
              ]}
            />
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="National School of Computer Science and System Analysis, ENSIAS"
              date="2019 - 2022"
              content={["Web & Mobile Computing Engineering "]}
            />
            <Resumecontent
              title="CPGE - Lycee Mohammed 6"
              date="2017 - 2019"
              content={["Preparatory Classes, Mathematics and Physics Branch"]}
            />
            <Resumecontent
              title="El Mansour Eddahbi High School"
              date="2016 - 2017"
              content={["Scientific Baccalaureat, Mathematics Option"]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Content Creator [Instagram: @choubari_]"
              content={[
                "Sharing Coding Knowledge using beautiful designed posts.",
                "Organizing many webinars for free about coding and design.",
                "Doing One-to-One Consulting sessions in my free time.",
              ]}
            />
            <Resumecontent
              title="Chair [IEEE ENSIAS Student Branch]"
              content={[
                "Organizing many volunteering activities and webinars with international speaksers.",
              ]}
            />
            <Resumecontent
              title="Co-Founder and Program Manager [Morocco IoT & AI Challenge]"
              content={[
                "Bringing Arab IoT & AI Challenge Local Qualifications to Morocco",
                "Organizing many webinars, training and mentoring sessions for the participants",
                "Omnisat from Morocco Won the first place on Arab IoT & AI Challenge (2020, the same year when we organized the first edition in Morocco)",
              ]}
            />
            <Resumecontent
              title="Graphic Designer [Olympiades ENSIAS]"
              content={[
                "Designing Flyers, Social Media Posts, Event covers and Thumbnails.",
              ]}
            />
            <h3 className="resume-title">Ranks and Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "IEEEXtreme 14.0 : 558",
                "Moroccan Collegiates Programming Contest, MCPC: 21",
                "GirlsCode",
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV - English
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
