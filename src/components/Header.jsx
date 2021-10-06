import React from "react";
import { Link } from "gatsby";

import "../styles/Header.css";
import logo from "../images/logo.jpeg";

import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <img
          src={logo}
          alt="The Fundamental Frequency logo"
          className="header-logo"
        />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
