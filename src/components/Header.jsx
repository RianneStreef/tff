import React from "react";
import { Link } from "gatsby";

import "../styles/Header.css";

import Burger from "../components/Burger";

const Header = (props) => {
  let { language, setLanguage, languageToUse } = props;

  return (
    <div className="header">
      <Link to="/">
        <div className="header-logo" />
      </Link>
      <Burger
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Header;
