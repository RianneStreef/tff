import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

import facebook from "../images/facebook.png";
import instagram from "../images/instagram.png";

import flagEn from "../images/icon-en.png";
import flagFr from "../images/icon-fr.png";

import "../styles/Navbar.css";

import { content } from "../content/languages";

const Ul = styled.ul`
  list-style: none;
  display: flex;
  z-index: 100;
  background-color: #fff;
  margin-top: 0;
  padding-left: 0;
  width: 100%;
  @media (min-width: 768px) {
    justify-content: flex-end;
    align-items: center;
    flex-flow: row nowrap;
    background-color: transparent;
    margin-right: 40px;
  }
  li {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #fff;
    padding-right: 25px;
    margin: 10px 0;
    a {
      color: #fff;
      transition: color 500ms ease-in;
      text-decoration: none;
    }
    a:visited {
      color: #fff;
      text-decoration: none;
    }
    a:hover {
      color: var(--color-highlight-blue);
      transition: color 500ms ease-in;
    }
    p {
      margin-top: 0;
    }
  }
  @media (max-width: 768px) {
    flex-flow: column nowrap;
    background-color: #404040;
    position: fixed;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(100%)")};
    top: 0;
    right: 0;
    height: 100vh;
    padding-top: 5rem;
    transition: transform 0.3s ease-in-out;
  }
`;

const Navbar = (props) => {
  let { open, setOpen } = props;
  let { language, setLanguage, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);

  function handleSetLanguage(language) {
    console.log(language);
    setLanguage(language);
    localStorage.setItem("languageInStorage", language);
  }

  return (
    <div className="nav-bar">
      <Ul open={open}>
        <li>
          <Link to="/team" className="nav-link" onClick={() => setOpen(!open)}>
            Team
          </Link>
        </li>
        <li>
          <Link
            to="/artists"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Artists
          </Link>
        </li>

        <li>
          <Link
            to="/events"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Events
          </Link>
        </li>

        <li>
          <Link
            to="/merchandise"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Merchandise
          </Link>
        </li>

        <li>
          <Link
            to="/contact"
            className="nav-link"
            onClick={() => setOpen(!open)}
          >
            Contact
          </Link>
        </li>
        <li>
          <a
            href="https://www.facebook.com/thefundamentalfrequency"
            className="nav-link social-nav-link"
            onClick={() => setOpen(!open)}
            target="_blank"
            rel="noreferrer"
          >
            <img src={facebook} className="social-link" />
          </a>
        </li>

        <li>
          <a
            href="https://www.instagram.com/thefundamentalfrequency/"
            className="nav-link social-nav-link"
            onClick={() => setOpen(!open)}
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} className="social-link" />
          </a>
        </li>
        <li>
          {languageToUse.language === "english" ? (
            <img
              className="language-icon"
              src={flagFr}
              onClick={() => handleSetLanguage("french")}
              alt="Set language to French"
            />
          ) : (
            <img
              className="language-icon"
              src={flagEn}
              onClick={() => handleSetLanguage("english")}
              alt="Set language to English"
            />
          )}
        </li>
      </Ul>
    </div>
  );
};

export default Navbar;
