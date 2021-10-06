import React from "react";
import { Link } from "gatsby";

import "../styles/Header.css";

import Navbar from "../components/Navbar";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo" />
      </Link>
      <Navbar />
    </div>
  );
};

export default Header;
