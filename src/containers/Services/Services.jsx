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
          <div className="app__services-weddings-title">
            <h1>Weddings</h1>
          </div>
          <div>
            <img
              className="app__services-blossom"
              src={blossomReverse}
              alt="flower"
            />
            <img className="app__services-blossom" src={blossom} alt="flower" />
          </div>
          <h2>Make your special day more special!</h2>
          <button>LEARN MORE</button>
        </div>
      </div>

      <div className="app__services-valentine">
        <div className="app__services-valentine-content">
          <div className="app__services-valentine-title">
            <h1>Valentine</h1>
          </div>
          <div>
            <img
              className="app__services-blossom"
              src={blossomReverse}
              alt="flower"
            />
            <img className="app__services-blossom" src={blossom} alt="flower" />
          </div>
          <h2>A day to put your tulips together!</h2>
          <button>LEARN MORE</button>
        </div>
        <img className="app__services-pic" src={Valentine} alt="valentine" />
      </div>
      <div className="app__services-mother">
        <img className="app__services-pic" src={Mother} alt="mothers day" />
        <div className="app__services-mother-content">
          <div className="app__services-mother-title">
            <h1>Mother´s Day</h1>
          </div>
          <div>
            <img
              className="app__services-blossom"
              src={blossomReverse}
              alt="flower"
            />
            <img className="app__services-blossom" src={blossom} alt="flower" />
          </div>
          <h2>Show your mom some extra love!</h2>
          <button>LEARN MORE</button>
        </div>
      </div>
      {/* <div className='app__services-'></div>
      <div className='app__services'></div> */}
    </div>
  );
};

export default Services;
