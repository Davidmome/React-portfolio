import React from "react";
import { useParams } from "react-router-dom";
import { ProjectList } from "../helpers/ProjectList";
import GitHubIcon from "@material-ui/icons/GitHub";
import "../styles/ProjectDisplay.css";
import { Button } from "@material-ui/core";

function ProjectDisplay() {
  const { id } = useParams();
  const project = ProjectList[id];
  return (
    <div className="project">
      <h1>{project.name}</h1>
      <img src={project.image} />
      <p>
        <b> Skills</b>: {project.skills}
      </p>
      <Button href={project.repo} target="_blank">
        <GitHubIcon />
      </Button>
    </div>
  );
}

export default ProjectDisplay;
