import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

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
          <ReorderIcon />
        </button>
      </div>
      <div className="links">
        <NavLink className="link" activeClassName="active" to="/">
          Home
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/projects">
          Projects
        </NavLink>
        <NavLink className="link" activeClassName="active" to="/experience">
          Experience
        </NavLink>
      </div>
    </div>
  );
}

export default Navbar;
