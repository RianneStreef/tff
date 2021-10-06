import React from "react";
import Layout from "../components/Layout";
import "../styles/ContactPage.css";

const ContactPage = () => {
  return (
    <>
      <div className="triangle-1" />
      <div className="triangle-2" />

      <section className="contact-page">
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          // action="/succes"
        >
          <input
            className="contact-input"
            type="hidden"
            name="contact"
            value="contact"
          />
          <p className="form-items">
            <label htmlFor="name">Name:</label> <br />
            <input
              className="contact-input"
              type="text"
              id="name"
              name="name"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="email">Email:</label> <br />
            <input
              className="contact-input"
              type="email"
              id="email"
              name="email"
              required
            />
          </p>
          <p className="form-items">
            <label htmlFor="message">Message:</label> <br />
            <textarea
              className="contact-input"
              id="message"
              name="message"
              required
              rows="10"
            ></textarea>
          </p>
          <div className="button-container">
            <button
              className="custom_button"
              type="submit"
              value="Submit message"
            >
              Send{" "}
            </button>
          </div>
        </form>
        <div className="contact-text">
          <h3>Contact Us!</h3>
          <p>
            For any questions, suggestions or reservations, please send us a
            message.{" "}
          </p>
        </div>
      </section>
    </>
  );
};

ContactPage.Layout = Layout;
export default ContactPage;
