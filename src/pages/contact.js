import React from "react";
import Layout from "../components/Layout";
import "../styles/ContactPage.css";

import logoBlack from "../images/contact-img.png";

const ContactPage = () => {
  return (
    <div className="contact-page-container">
      <div className="header-placeholder" />
      <div className="triangle-1" />
      <div className="triangle-2" />

      <section className="contact-page">
        <form
          className="contact-form"
          name="contact"
          method="post"
          data-netlify="true"
          // action="/succes"
          netlify-honeypot="bot-field"
        >
          <input
            className="contact-input"
            type="hidden"
            name="contact"
            value="contact"
          />
          <p className="hidden">
            <label>
              Don’t fill this out if you’re human: <input name="bot-field" />
            </label>
          </p>
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
          <div className="contact-button-container">
            <button className="button" type="submit" value="Submit message">
              Send{" "}
            </button>
          </div>
        </form>
        <div className="contact-text ">
          <div>
            <p className="contact-message">
              For any questions, suggestions or reservations, please send us a
              message.{" "}
            </p>
            <div className="central-image-container">
              <img src={logoBlack} className="contact-logo" />
            </div>
          </div>
          <h1 className="w3-animate-bottom contact-header">Contact</h1>
        </div>
      </section>
    </div>
  );
};

ContactPage.Layout = Layout;
export default ContactPage;
