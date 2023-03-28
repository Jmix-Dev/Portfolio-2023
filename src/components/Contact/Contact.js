import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="contact-form-container">
      <div className="form-wrapper">
        <form
          action="https://getform.io/f/0f1e5529-4b10-4267-9fae-5f5fe3d5fd28"
          method="POST"
          className="form"
        >
          <h1 className="form-title">Contact</h1>
          <input type="text" name="name" placeholder="Name" />
          <input type="text" name="email" placeholder="Email" />
          <textarea name="message" placeholder="Message" rows="10"></textarea>
          <button type="submit" className="submit-btn">
            Work With Me
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
