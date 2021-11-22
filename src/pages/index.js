import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";

import "../styles/IndexPage.css";

import aboutUs from "../images/about-us.png";

import { Helmet } from "react-helmet";

import { content } from "../content/languages";

const IndexPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  return (
    <>
      <Helmet>
        <title>The Fundamental Frequency</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link rel="canonical" href="https://www.thefundamentalfrequency.com/" />
      </Helmet>
      <div className="index">
        <div className="header-placeholder" />
        <div className="landing">
          <AnchorLink
            to="/#aboutUs"
            title="About Us"
            className="read-more hidden-mobile"
            style={{ color: "black" }}
          >
            Read more
          </AnchorLink>
        </div>
        <div className="about-us" id="aboutUs">
          <h2 className="about-us-header">Jouer pour les ames</h2>
          <h3 className="about-us-header">Agency fundamental</h3>
          <div className="about-us-container">
            <img src={aboutUs} className="about-us-img hidden-mobile" />
            <div className="about-us-text">
              <h4 className="about-us-subtitle">A propos de nous</h4>
              <p>
                The Fundamental Frequency et son Label musical est une agence
                multi casquettes de production, de diffusion, booking. Elle
                organise des événements et tournées En tant qu’agent artistique,
                elle promeut des artistes musicaux et scénographes de la scène
                électronique.
              </p>
              <p>
                L’équipe TFF s’engage tout au long de l’année en alliant tous
                les ingrédients nécessaires pour vous créer des événements
                d’exceptions et faire vibrer tous vos sens.
              </p>
              <p>
                Nous vous proposons un panel d’artistes renommés de la scène
                Techno et d’autres jeunes artistes prometteurs, s’associant à
                différents acteurs tels que des Scénographes, Vidéo Mapper,
                Danseurs, Performers Circus.
              </p>
              <p>A chaque prestation, nous nous réinventons.</p>
              <p>
                Ensemble, nous aspirons à vous proposer de belles scènes
                innovantes à thèmes variés.
              </p>
              <p>
                Notre label met en place des résidences ou nos musiciens(nes)
                coopèrent sur des projets communs:“compilations”,
                &quot;EP.&quot; &quot;tracks&quot; & &quot;remix&quot; dans nos
                studios de La Vallée des Belleville.
              </p>
              <p>
                Le savoir faire de l&quot;agence, et les artistes de la T.F.F
                arrivent à grands pas, sensation garantie.
              </p>
              <p>Restez connecté . . .</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
