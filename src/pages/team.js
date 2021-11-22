import React from "react";
import Layout from "../components/Layout";

import equipe from "../images/equipe.png";

import "../styles/Team.css";

import { Helmet } from "react-helmet";

const TeamPage = () => {
  return (
    <>
      <Helmet>
        <title>Team</title>
        <meta name="robots" content="index, follow" />
        <meta name="description" content="" />
        <meta name="keywords" content="" />
        <link
          rel="canonical"
          href="https://www.thefundamentalfrequency.com/team"
        />
      </Helmet>
      <div className="team-page">
        <div className="full-vh">
          <div className="header-placeholder" />
          <img src={equipe} className="equipe" />
          <div className="team-members-titles-desktop">
            <div className="team-member">
              <h3>Joel Alby</h3>
              <h4 className="team-member-1">Producteur</h4>
            </div>
            <div className="team-member">
              <h3>Cécile Mulot</h3>
              <h4 className="team-member-2">Consult Artistique</h4>
            </div>
            <div className="team-member">
              <h3>Christian Alby</h3>
              <h4 className="team-member-3">Directeur</h4>
            </div>
            <div className="team-member">
              <h3>Guillem Kyem</h3>
              <h4 className="team-member-4">Label Manager</h4>
            </div>
          </div>
        </div>
        <div className="team-members-description-desktop">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum gravida nisi, non feugiat metus tempor et. Sed quis sem
            eu dui pulvinar egestas ut quis nulla. Quisque sed arcu ultricies,
            placerat erat quis, auctor metus. Pellentesque mi ligula, vestibulum
            ac sapien ac, sodales luctus massa. Quisque et ex pharetra, interdum
            diam ac, gravida eros. Pellentesque porta dui sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum gravida nisi, non feugiat metus tempor et. Sed quis sem
            eu dui pulvinar egestas ut quis nulla. Quisque sed arcu ultricies,
            placerat erat quis, auctor metus. Pellentesque mi ligula, vestibulum
            ac sapien ac, sodales luctus massa. Quisque et ex pharetra, interdum
            diam ac, gravida eros. Pellentesque porta dui sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum gravida nisi, non feugiat metus tempor et. Sed quis sem
            eu dui pulvinar egestas ut quis nulla. Quisque sed arcu ultricies,
            placerat erat quis, auctor metus. Pellentesque mi ligula, vestibulum
            ac sapien ac, sodales luctus massa. Quisque et ex pharetra, interdum
            diam ac, gravida eros. Pellentesque porta dui sit amet.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
            condimentum gravida nisi, non feugiat metus tempor et. Sed quis sem
            eu dui pulvinar egestas ut quis nulla. Quisque sed arcu ultricies,
            placerat erat quis, auctor metus. Pellentesque mi ligula, vestibulum
            ac sapien ac, sodales luctus massa. Quisque et ex pharetra, interdum
            diam ac, gravida eros. Pellentesque porta dui sit amet.
          </p>
        </div>

        {/* 2 different divs, one for mobile, and one for desktop, to be have to
use just titles in the 100vh. And then for mobile to display everything
in the right order.  */}

        <div className="team-members-mobile">
          <div className="team-member">
            <h3>Joel Alby</h3>
            <h4 className="team-member-1">Producteur</h4>
            <p className="team-member-description-mobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum gravida nisi, non feugiat metus tempor et. Sed quis
              sem eu dui pulvinar egestas ut quis nulla. Quisque sed arcu
              ultricies, placerat erat quis, auctor metus. Pellentesque mi
              ligula, vestibulum ac sapien ac, sodales luctus massa. Quisque et
              ex pharetra, interdum diam ac, gravida eros. Pellentesque porta
              dui sit amet.
            </p>
          </div>
          <div className="team-member">
            <h3>Cécile Mulot</h3>
            <h4 className="team-member-2">Consult Artistique</h4>
            <p className="team-member-description-mobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum gravida nisi, non feugiat metus tempor et. Sed quis
              sem eu dui pulvinar egestas ut quis nulla. Quisque sed arcu
              ultricies, placerat erat quis, auctor metus. Pellentesque mi
              ligula, vestibulum ac sapien ac, sodales luctus massa. Quisque et
              ex pharetra, interdum diam ac, gravida eros. Pellentesque porta
              dui sit amet.
            </p>
          </div>
          <div className="team-member">
            <h3>Christian Alby</h3>
            <h4 className="team-member-3">Directeur</h4>
            <p className="team-member-description-mobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum gravida nisi, non feugiat metus tempor et. Sed quis
              sem eu dui pulvinar egestas ut quis nulla. Quisque sed arcu
              ultricies, placerat erat quis, auctor metus. Pellentesque mi
              ligula, vestibulum ac sapien ac, sodales luctus massa. Quisque et
              ex pharetra, interdum diam ac, gravida eros. Pellentesque porta
              dui sit amet.
            </p>
          </div>
          <div className="team-member">
            <h3>Guillem Kyem</h3>
            <h4 className="team-member-4">Label Manager</h4>
            <p className="team-member-description-mobile">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
              condimentum gravida nisi, non feugiat metus tempor et. Sed quis
              sem eu dui pulvinar egestas ut quis nulla. Quisque sed arcu
              ultricies, placerat erat quis, auctor metus. Pellentesque mi
              ligula, vestibulum ac sapien ac, sodales luctus massa. Quisque et
              ex pharetra, interdum diam ac, gravida eros. Pellentesque porta
              dui sit amet.
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

TeamPage.Layout = Layout;
export default TeamPage;
