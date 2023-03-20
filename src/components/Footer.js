import React from "react";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import "../styles/Footer.css";
import { Button } from "@material-ui/core";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <Button
          href="https://www.linkedin.com/in/david-morales-mendoza-83861a121/"
          target="_blank"
        >
          <LinkedInIcon />
        </Button>
        <Button href="https://github.com/Davidmome" target="_blank">
          <GitHubIcon />
        </Button>
        <Button href="/contacto">
          <EmailIcon />
        </Button>
      </div>
      <p>David Morales Mendoza</p>
    </div>
  );
}

export default Footer;
