import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faFacebook } from "@fortawesome/free-brands-svg-icons";

import "../styles/Navbar.css";

const Navbar = () => {
  return (
    <div>
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
      <a href="https://facebook.com" className="nav-link">
        <FontAwesomeIcon icon={faFacebook} size="1x" />
      </a>
      <a href="https://instagram.com" className="nav-link">
        <FontAwesomeIcon icon={faInstagram} size="1x" />
      </a>
    </div>
  );
};

export default Navbar;
