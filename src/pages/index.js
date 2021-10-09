import React from "react";
import { Link } from "gatsby";
import Layout from "../components/Layout";

import "../styles/IndexPage.css";

const IndexPage = () => {
  return (
    <>
      <div className="index">
        <div className="header-placeholder" />
        <div className="landing">
          <Link to="/team" className="read-more" style={{ color: "black" }}>
            Read more
          </Link>
        </div>
      </div>
    </>
  );
};

IndexPage.Layout = Layout;
export default IndexPage;
