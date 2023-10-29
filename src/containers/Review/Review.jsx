import React from "react";
import "./Review.css";
import ReviewCard from "../../components/ReviewCard";
import pic1 from "../../images/review2.jpg";
import pic2 from "../../images/review1.jpg";
import pic3 from "../../images/review3.jpg";
import vector from "../../images/flower-black-and-white.png";
import vector2 from "../../images/flower-black-and-white-reverse.png";

const Review = () => {
  const name1 = "Helen";
  const name2 = "Nikki";
  const name3 = "Edna";

  const role1 = "The creative intern";
  const role2 = "The hardworking employee";
  const role3 = "The dragon-slayer";

  // const rating1 ="⭐⭐⭐⭐★";
  // const rating2 ="⭐⭐⭐★★";
  // const rating3 ="⭐⭐⭐⭐⭐";

  return (
    <div className="app__review" id="team">
      <div className="app__review-title">
        <img src={vector} alt="vector flower" />
        <h1>Meet our team!</h1>
        <img src={vector2} alt="vector flower" />
      </div>
      <div className="app__review-content">
        <ReviewCard name={name1} role={role1} img={pic1} />
        <ReviewCard name={name2} role={role2} img={pic2} />
        <ReviewCard name={name3} role={role3} img={pic3} />
      </div>
    </div>
  );
};

export default Review;
