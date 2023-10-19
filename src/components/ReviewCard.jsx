import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ img, name, role }) => {
  return (
    <div className="app__reviewcard">
      <div className="app__reviewcard-content">
        <div className="app__reviewcard-content-pic">
          <img src={img} alt="review pic" />
        </div>
        <div className="app__reviewcard-content-name">
          <h2>{name}</h2>
        </div>

        <div className="app__reviewcard-content-role">
          <h3>{role} </h3>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
