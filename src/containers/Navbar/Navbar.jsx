import { React, useState } from "react";
import "./Navbar.css";
import Bouquet from "../../images/rose.png";

import Hamburger from "hamburger-react";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="app__navbar">
      <div className="app__navbar-logo">
        <img src={Bouquet} alt="bouquet" />
        Maison De La Fleur
      </div>
      <div className="app__navbar-menu">
        <ul className="app__navbar-menu-links">
          <li>
            <a href="#services">Services</a>
          </li>
          <li>
            <a href="#gallery">Gallery</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
        </ul>
      </div>
      <div className="app__navbar-contact">
        <a href="#contact">Contact</a>
      </div>

      <div className="app__navbar-smallscreen">
        <Hamburger toggled={open} toggle={setOpen} />
        {open && (
          <div className="app__navbar-menu-popup slide-bottom">
            <ul className="app__navbar-menu-popup-links">
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#gallery">Gallery</a>
              </li>
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
