import React from "react";
import "../styles/Header.css";

function Header({ title, subtitle }) {
  return (
    <div className="header">
      <h1>{title}</h1>
    </div>
  );
}

export default Header;
