import React from "react";
import "./Header.css";
import Bouquet from "../../images/rose.jpg";

const Header = () => {
  return (
    <div className="app__header">
      <img src={Bouquet} alt="bouquet" />
      <div className="app__header-text">
        <h1>Exclusive High-Style</h1>
        <h2>Floral arrangements</h2>
        <button> Shop Now</button>
      </div>
    </div>
  );
};

export default Header;
