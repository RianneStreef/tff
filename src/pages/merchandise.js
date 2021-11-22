import React from "react";
import Layout from "../components/Layout";

import { Helmet } from "react-helmet";

import { content } from "../content/languages";

const MerchandisePage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);
  return (
    <>
      <Helmet>
        <title>Merchandise</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href="https://www.thefundamentalfrequency.com/merchandise"
        />
      </Helmet>
      <div className="header-placeholder" />
      <div>MerchandisePage</div>
    </>
  );
};

MerchandisePage.Layout = Layout;
export default MerchandisePage;
