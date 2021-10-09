import React from "react";

import { Link } from "gatsby";
import copyright from "../images/copyright.png";

// import { content } from "../content/languages";

import "../styles/Copyright.css";

const Copyright = () => {
  // let { language, languageToUse } = props;

  // language === "english"
  //   ? (languageToUse = content.english)
  //   : (languageToUse = content.french);
  return (
    <div className="copyright">
      <p>
        Copyright
        <sup>
          {" "}
          <img src={copyright} className="copyright-icon" />
        </sup>{" "}
        The Fundamental Frequency
        {/* {languageToUse.copyright} */}
      </p>
      <p>
        All rights reserved -{" "}
        <Link to="/legal">
          {/* {languageToUse.mentionsLegal} */}
          Legal Mentions
        </Link>
      </p>
    </div>
  );
};

export default Copyright;
