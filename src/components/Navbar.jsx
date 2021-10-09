import React from "react";
import { Link } from "gatsby";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div className="nav-bar">
      <Link to="/team" className="nav-link">
        Team
      </Link>
      <Link to="/artists" className="nav-link">
        Artists
      </Link>
      <Link to="/events" className="nav-link">
        Events
      </Link>
      <Link to="/merchandise" className="nav-link">
        Merchandise
      </Link>
      <Link to="/contact" className="nav-link">
        Contact
      </Link>
      <a href="https://facebook.com" className="nav-link social-nav-link">
        <img src={facebook} className="social-link" />
      </a>
      <a href="https://instagram.com" className="nav-link social-nav-link">
        <img src={instagram} className="social-link" />
      </a>
    </div>
  );
};

export default Navbar;
