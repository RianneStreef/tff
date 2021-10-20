import React from "react";
import { AnchorLink } from "gatsby-plugin-anchor-links";

import Layout from "../components/Layout";

import "../styles/IndexPage.css";

import aboutUs from "../images/about-us.png";

const IndexPage = () => {
  return (
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
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin at
              sem finibus, cursus neque eu, dignissim libero. Nam scelerisque
              fringilla velit vel aliquam. Ut suscipit dictum orci id dignissim.
              Aliquam vel nisi arcu. Fusce efficitur est ac orci imperdiet
              posuere. Donec euismod, quam sit amet tincidunt pretium, magna
              massa condimentum justo, quis ornare turpis orci non leo. Cras
              elit ex.
            </p>
            <p>
              Pellentesque justo elit, dictum id finibus quis, volutpat quis
              elit. Ut efficitur leo nec placerat tempus. Sed pharetra volutpat
              eleifend. Phasellus id tellus est. Suspendisse et venenatis magna.
              Morbi non libero eu nulla viverra pretium vitae nec elit.
              Phasellus ac felis nunc. Curabitur sodales, mauris eget
              ullamcorper commodo, libero nisi faucibus magna, vitae aliquam
              urna risus sed magna.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
