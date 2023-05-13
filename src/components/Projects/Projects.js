import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Meme Generator"
              description="Meme Generator is a web-based tool that allows users to quickly and easily create their own visual image meme,
It is react project which generates random meme images and we can customize those images to make our memes."
              ghLink="https://github.com/Ayaaaaaaaan/meme_generator_by_ayaan"
              demoLink="https://ayaaaaaaaan.github.io/meme_generator_by_ayaan/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Restaurant-Website"
              description="Triple A Eats  is a captivating restaurant website designed using HTML, CSS, and JavaScript. It features a visually appealing layout with a navigation menu, sections for home, menu, reservation, and contact. The menu section showcases enticing dishes with images and prices. Customers can make reservations through a form, and contact information is provided for inquiries."
              ghLink="https://github.com/Ayaaaaaaaan/Restaurant-Website"
              demoLink="https://ayaaaaaaaan.github.io/Restaurant-Website/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Emotify"
              description="'Emotify' is a website where user can get a playlist of songs based on their current mood, just by clicking a picture with attractive UI.
·The AI used in our project can detect even a minute facial movement and suggest a playlist based on that.
"
              ghLink="https://github.com/Ayaaaaaaaan/Emotify"
              demoLink="https://editor.Ayaaaaaaaan.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Birthday Reminder"
              description="The Birthday Reminder website, created using HTML, CSS, JavaScript, and React, is a handy tool for keeping track of important birthdays. The user-friendly interface displays a list of upcoming birthdays with names and dates. Users can add new birthdays, edit existing ones, and mark them as completed. The website provides a visually appealing design, intuitive functionality, and real-time updates."
              ghLink="https://github.com/Ayaaaaaaaan/Birthday-Reminder"
              demoLink="https://ayaaaaaaaan.github.io/Birthday-Reminder/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
