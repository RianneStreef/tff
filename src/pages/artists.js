import React, { useEffect } from "react";
import Layout from "../components/Layout";
import { graphql } from "gatsby";

import { Helmet } from "react-helmet";

import "../styles/ArtistPage.css";

import { content } from "../content/languages";

const ArtistPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);

  const { data } = props;
  const allArtists = data.allContentfulArtist.nodes;
  console.log(allArtists);

  useEffect(() => {
    const scrollElements = document.querySelectorAll(".fade-in-bottom");

    const elementInView = (scrollElements, dividend = 1) => {
      const elementTop = scrollElements.getBoundingClientRect().top;

      return (
        elementTop <=
        (window.innerHeight || document.documentElement.clientHeight) / dividend
      );
    };

    const elementOutofView = (scrollElements) => {
      const elementTop = scrollElements.getBoundingClientRect().top;

      return (
        elementTop >
        (window.innerHeight || document.documentElement.clientHeight)
      );
    };

    const displayScrollElement = (element) => {
      element.classList.add("scrolled");
    };

    const hideScrollElement = (element) => {
      element.classList.remove("scrolled");
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((element) => {
        if (elementInView(element, 1.25)) {
          displayScrollElement(element);
        } else if (elementOutofView(element)) {
          hideScrollElement(element);
        }
      });
    };

    // window.addEventListener("scroll", () => {
    //   handleScrollAnimation();
    // });

    setInterval(() => {
      handleScrollAnimation();
    }, 100);
  });

  const artistList = allArtists.map((artist) => {
    return (
      <div key={artist.id} className="artist-card">
        <a href={artist.artistPage.file.url}>
          <img src={artist.artistImage.file.url} className="artist-image" />
        </a>
      </div>
    );
  });

  return (
    <>
      <Helmet>
        <title>Artists</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href="https://www.thefundamentalfrequency.com/artists"
        />
      </Helmet>
      <div className="artist-page">
        <div className="header-placeholder" />
        <div className="triangle-1" />
        <div className="crosses-background-black" />
        <div className="crosses-background-black-2" />

        <div className="triangle-2" />

        <div className="artists">
          <h1>Artists</h1>
          <div className="artists-display fade-in-bottom">
            {artistList}
            {artistList}
            {artistList}
            {artistList}
            {artistList}
          </div>
        </div>
      </div>
    </>
  );
};

export const artistQuery = graphql`
  query artistQuery {
    allContentfulArtist {
      nodes {
        artistCategory
        artistName
        artistImage {
          file {
            url
          }
        }
        artistPage {
          file {
            url
          }
        }
      }
    }
  }
`;

ArtistPage.Layout = Layout;
export default ArtistPage;
