import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div className="app__contact" id="contact">
      <div className="app__contact-title">
        <h1>Contact us!</h1>
      </div>
      <div className="app__contact-content">
        <div className="app__contact-content-email">
          <h1>Email:</h1>
          <h2>Contact@maisondelafleur.fr</h2>
        </div>
        <div className="app__contact-content-hours">
          <h1>Opening Hours:</h1>
          <h2>Mon - Thu: 11:00 - 20:00</h2>
          <h2>Fri - Sat: 12:00 - 21:00</h2>
        </div>

        <div className="app__contact-content-phone">
          <h1>Phone Number:</h1>
          <h2>+33 78 90 12 23 4</h2>
        </div>
        <div className="app__contact-content-adress">
          <h1>Adress:</h1>
          <h2>69 Rue De La Belle Maire</h2>
          <h2>75011 Paris</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
