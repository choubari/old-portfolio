import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import hissnmuslim from "../../Assets/Projects/hissnmuslim.jpg";
import trainingtracker from "../../Assets/Projects/trainingtracker.jpg";
import ieeesb from "../../Assets/Projects/ieeesb.PNG";
import jobhunter from "../../Assets/Projects/progress.jpg";
import iwimhub from "../../Assets/Projects/progress.jpg";
import kindnet from "../../Assets/Projects/kindnet.PNG";
import ensiaswikihub from "../../Assets/Projects/progress.jpg";
import kalah from "../../Assets/Projects/kalah.PNG";
import reactlofi from "../../Assets/Projects/reactlofi.PNG";
import awesomemuslims from "../../Assets/Projects/awesomemuslims.PNG";
import codinggame from "../../Assets/Projects/codinggame.jpg";
import devproductivity from "../../Assets/Projects/devproductivity.jpg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          Mes <strong className="purple">Projets </strong>
        </h1>
        <p style={{ color: "white" }}>
          Voici les projets sur lesquels j'ai travaillé récemment.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ensiaswikihub}
              isBlog={false}
              title="ENSIAS WikiHub"
              description="Forum d'échange (application mobile) lié à la programmation avec un système de vote et de recommandation en utilisant: Android, Java, XML, Firebase, MLKit."
              link="https://github.com/choubari/ENSIAS-WikiHub"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kindnet}
              isBlog={false}
              title="Kind Net"
              description="Un jeu Unity 2D qui vise à sensibiliser les enfants à la cyberintimidation et l'harcèlement sur internet."
              link="https://github.com/choubari/Kind-Net"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={iwimhub}
              isBlog={false}
              title="IWIM Hub"
              description="Application mobile pour gérer la filière IWIM (emplois du temps, messagerie, absence...)."
              link="https://github.com/choubari/IWIM-Hub"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobhunter}
              isBlog={false}
              title="JobHunter"
              description="Platforme de recrutement des profils IT."
              link="https://github.com/choubari/Job-Hunter"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={awesomemuslims}
              isBlog={false}
              title="Awesome Muslims"
              description="Une liste qui regroupe les différentes ressources pour encourager les développeurs à produire plus d'applications islamiques."
              link="https://github.com/choubari/Awesome-Muslims"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={reactlofi}
              isBlog={false}
              title="Chill Choub"
              description="Une application Web responsive pour écouter Lofi Beats, réalisée avec ReactJS et SASS, deploiment sur Vercel. Les morceaux de musique sont collectés auprès de ChillHop."
              link="https://github.com/choubari/React-LoFi-Music-App"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ieeesb}
              isBlog={false}
              title="Système de Management de l'IEEE ENSIAS"
              description="Application Web pour gérer le travail au sein de la branche étudiante IEEE ENSIAS."
              link="https://github.com/choubari/IEEE-ENSIAS-Management-System"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={trainingtracker}
              isBlog={false}
              title="Training Tracker"
              description="Application mobile de suivi des entraînements sportifs entre un entraîneur et les membres de ses équipes, développer en utilisant Android, JAVA et Firebase."
              link="https://github.com/choubari/Training-Tracker"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={hissnmuslim}
              isBlog={false}
              title="Hissn Al Muslim"
              description="Application Mobile Open Source pour les musumlans (+40 stars et +15 forks sur Github)."
              link="https://github.com/choubari/Muslim-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kalah}
              isBlog={false}
              title="Kalah Game"
              description="Aussi appelé MANCALA, c'est un jeu joué sur un plateau de deux rangées, chacune composée de six fosses rondes qui ont un grand trou à chaque extrémité appelé kalah.
Le but du jeu est de capturer plus de graines que son adversaire. Le projet est développer en utilisant le langage C ey la librairie SDL2"
              link="https://github.com/moadfakhri/KALAH-"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
          My Posts Préférés sur <strong className="purple">Instagram </strong>
        </h1>
        <p style={{ color: "white" }}>Consulter et lire ces posts</p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={codinggame}
              link="https://www.instagram.com/p/CNS7_wmIcLj/"
              title="Coding: A Long Game"
              site=""
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={devproductivity}
              link="https://www.instagram.com/p/CNDSdHaIv0e/"
              title="Can developer productivity be measured?"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
