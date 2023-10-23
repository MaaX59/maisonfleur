import React from "react";
import "./Services.css";
import Valentine from "../../images/valentine.jpg";
import Mother from "../../images/mothersday.webp";
import Wedding from "../../images/wedding.jpg";
import blossom from "../../images/blossom.png";
import blossomReverse from "../../images/blossom-reverse.png";

const Services = () => {
  return (
    <div className="app__services" id="services">
      <div className="app__services-weddings">
        <img className="app__services-pic" src={Wedding} alt="wedding" />
        <div className="app__services-weddings-content">
          <img className="app__services-blossom" src={blossom} alt="flower" />
          <h1>Weddings</h1>
          <img
            className="app__services-blossom"
            src={blossomReverse}
            alt="flower"
          />
        </div>
      </div>
      <div className="app__services-valentine">
        <div className="app__services-valentine-content">
          <img className="app__services-blossom" src={blossom} alt="flower" />
          <h1>Valentine</h1>
          <img
            className="app__services-blossom"
            src={blossomReverse}
            alt="flower"
          />
        </div>
        <img src={Valentine} alt="valentine" />
      </div>
      <div className="app__services-mother">
        <img src={Mother} alt="mothers day" />
        <div className="app__services-"></div>

        <div className="app__services-mother-content">
          <img className="app__services-blossom" src={blossom} alt="flower" />
          <h1>Mother´s Day</h1>
          <img
            className="app__services-blossom"
            src={blossomReverse}
            alt="flower"
          />
        </div>

      </div>
      {/* <div className='app__services-'></div>
      <div className='app__services'></div> */}
    </div>
  );
};

export default Services;
