import React, { useRef } from "react";
import Header from "../components/Header";
import emailjs from "@emailjs/browser";
import "../styles/Contacto.css";
import { Button } from "@material-ui/core";

function Contacto() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_kxmleff",
        "template_abyokmk",
        form.current,
        "gLtLl5sr_IRnDIfD5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div>
      <Header title="Mandame un correo!" />
      <h4 className="info">Numero Telefonico: +52 833-300-3621</h4>
      <h4 className="info">Email: david_morales95@outlook.com</h4>
      <div className="container">
        <form ref={form} onSubmit={sendEmail}>
          <input
            placeholder="Tu Nombre"
            className="field"
            type="text"
            name="user_name"
          />
          <input
            placeholder="Tu Email"
            className="field"
            type="email"
            name="user_email"
          />
          <textarea placeholder="Tu mensaje" className="field" name="message" />
          <Button size="large" variant="contained" disableElevation>
            <input type="submit" value="Send" />
          </Button>
        </form>
      </div>
    </div>
  );
}

export default Contacto;
