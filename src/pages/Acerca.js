import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import foto from "../assets/foto.jpg";
import "../styles/Acerca.css";
import { Button } from "@material-ui/core";
import Header from "../components/Header";

function Acerca() {
  return (
    <div className="home">
      <Header className="about" title="Acerca de mi" />
      <div className="about">
        <div>
          <img src={foto} alt="foto" />
        </div>
        <h2>Hola!, Soy David Morales</h2>
        <div className="prompt">
          <p>Ingeniero quimico/fullstack Webdeveloper</p>
          <Button
            href="https://www.linkedin.com/in/david-morales-mendoza-83861a121/"
            target="_blank"
          >
            <LinkedInIcon />
          </Button>
          <Button href="/contacto">
            <EmailIcon />
          </Button>
          <Button href="https://github.com/Davidmome" target="_blank">
            <GitHubIcon />
          </Button>
        </div>
      </div>
      <div className="skills">
        <h1>Conocimientos</h1>
        <ol className="list">
          <li className="item">
            <h2>Front-End</h2>
            <span>React,HTML,CSS,BootStrap,MaterialUI,</span>
          </li>
          <li className="item">
            <h2>Back-End</h2>
            <span>NodeJ,GraphQL,ApolloServer,MySQL,MongoDB</span>
          </li>
          <li className="item">
            <h2>Languages</h2>
            <span>JavaScript</span>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Acerca;
