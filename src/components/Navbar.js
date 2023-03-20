import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReoderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);
  const location = useLocation();
  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div className="navbar" id={expandNavbar ? "open" : "close"}>
      <div className="toggleButton">
        <button
          onClick={() => {
            setExpandNavbar((prev) => !prev);
          }}
        >
          <ReoderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink activeClassName="active" className={"tab"} to="/">
          Acerca de mi
        </NavLink>
        <NavLink activeClassName="active" className={"tab"} to="/cartera">
          Cartera
        </NavLink>
        <NavLink activeClassName="active" className={"tab"} to="/contacto">
          Contacto
        </NavLink>
        <NavLink activeClassName="active" className={"tab"} to="/curriculum">
          Curriculum
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
