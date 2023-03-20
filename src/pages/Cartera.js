import React from "react";
import Project from "../components/Project";
import { ProjectList } from "../helpers/ProjectList";
import Header from "../components/Header";

import "../styles/Projects.css";

function Cartera() {
  return (
    <div className="projects">
      <Header title="Mis Proyectos" />
      <div className="projectList">
        {ProjectList.map((project, idx) => {
          return <Project id={idx} name={project.name} image={project.image} />;
        })}
      </div>
    </div>
  );
}

export default Cartera;
