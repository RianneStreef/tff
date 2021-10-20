import React from "react";
import { Link } from "gatsby";

import "../styles/Header.css";

import Burger from "../components/Burger";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo" />
      </Link>
      <Burger />
    </div>
  );
};

export default Header;
