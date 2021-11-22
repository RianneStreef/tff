import React from "react";
import Layout from "../components/Layout";

import "../styles/SuccessPage.css";

import { content } from "../content/languages";

const SuccessPage = (props) => {
  let { language, languageToUse } = props;

  language === "english"
    ? (languageToUse = content.english)
    : (languageToUse = content.french);

  console.log(languageToUse);

  return (
    <div className="success">
      <div className="header-placeholder" />
      <div className="success-message">
        <p> SUCCESS MESSAGE</p>
        <p>
          <a href="/"> &#8592; Back to homepage</a>
        </p>
      </div>
    </div>
  );
};

SuccessPage.Layout = Layout;
export default SuccessPage;
