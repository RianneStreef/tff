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
      <div
        key={event.id}
        className="event-card"
        // if index == even then add className to change background color
      >
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
    let container = document.getElementById("slide-container");

    if (direction == "up") {
      container.scrollTop -= 50;
      console.log("scrolling up");
    } else {
      container.scrollTop += 50;
      console.log("scroll down");
    }
  }

  return (
    <>
      <div className="header-placeholder" />

      <div className="events">
        <h1 className="w3-animate-bottom ">Events</h1>
        <div className="event-list-container">
          <div className="event-button-container">
            <button
              type="button"
              onClick={() => slide("up")}
              className="event-button-up"
            />
          </div>
          <div className="events-scroll-list" id="slide-container">
            {eventList} {eventList}
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
