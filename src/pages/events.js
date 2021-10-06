import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/Layout";
import "../styles/EventPage.css";
import logo from "../images/icon.png";

const EventsPage = (props) => {
  const { data } = props;
  const allEvents = data.allContentfulEvent.nodes;
  console.log(allEvents);

  const eventList = allEvents.map((event) => {
    return (
      <div key={event.id} className="event-card">
        <div className="event-logo-container">
          <img src={logo} className="event-logo" />
        </div>
        <div className="event-info">
          <div>
            <p>{event.eventTitle}</p>
            <p>{event.eventLocation}</p>
          </div>
          <p>{event.eventDate}</p>
        </div>
      </div>
    );
  });

  function slide(direction) {
    let container = document.getElementById("container");
    let scrollCompleted = 0;
    let slideVar = setInterval(function () {
      if (direction == "up") {
        container.scrollUp -= 10;
      } else {
        container.scrollUp += 10;
      }
      scrollCompleted += 10;
      if (scrollCompleted >= 100) {
        window.clearInterval(slideVar);
      }
    }, 50);
  }

  return (
    <>
      <div className="header-placeholder" />

      <div className="events">
        <h1>Events</h1>
        <div className="event-list-container">
          <div className="event-button-container">
            <button
              type="button"
              onClick={() => slide("up")}
              className="event-button-up"
            />
          </div>
          <div className="events-scroll-list" id="container">
            {eventList}
          </div>
          <div className="event-button-container">
            <button
              type="button"
              onClick={() => slide("down")}
              className="event-button-down"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const artistQuery = graphql`
  query EventQuery {
    allContentfulEvent(sort: { order: ASC, fields: eventDate }) {
      nodes {
        id
        eventDate
        eventTitle
        eventLocation
      }
    }
  }
`;

EventsPage.Layout = Layout;
export default EventsPage;
