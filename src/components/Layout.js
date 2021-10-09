import React, { useState } from "react";

import Header from "./Header";
import Footer from "./Footer";

import "../styles/Layout.css";
import "../styles/global.css";

// eslint-disable-next-line react/prop-types
const Layout = ({ children }) => {
  let [language, setLanguage] = useState("french");
  let languageToUse = "french";

  const childrenWithProps = React.Children.map(children, (child) =>
    React.cloneElement(child, {
      language,
      setLanguage,
      languageToUse,
    })
  );
  return (
    <div className="layout">
      <Header
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
      <section className="main">{childrenWithProps}</section>

      <Footer
        language={language}
        setLanguage={setLanguage}
        languageToUse={languageToUse}
      />
    </div>
  );
};

export default Layout;
