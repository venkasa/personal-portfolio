import React, { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { FiDownload } from "react-icons/fi";
import "../styles/Navbar.css";
import ReorderIcon from "@material-ui/icons/Reorder";

function Navbar() {
  const [expandNavbar, setExpandNavbar] = useState(false);

  const location = useLocation();

  useEffect(() => {
    setExpandNavbar(false);
  }, [location]);

  return (
    <div>
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

      <div className="download-resume">
        <Link
          to="/assets/Venkatesh Krishna Resume.pdf"
          target="_blank"
          download
        >
          <FiDownload className="icon" />
          Download Resume
        </Link>
      </div>
    </div>
  );
}

export default Navbar;
