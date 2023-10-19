import React from 'react'
import './Review.css'
import ReviewCard from '../../components/ReviewCard'
import pic1 from '../../images/review2.jpg'
import pic2 from '../../images/review1.jpg'
import pic3 from '../../images/review3.jpg'

const Review = () => {

  const name1 ="Helen";
  const name2 ="Nikki";
  const name3 ="Edna";

  const role1 ="The creative intern";
  const role2 ="The hardworking employee";
  const role3 ="The dragon-slayer";
 
  // const rating1 ="⭐⭐⭐⭐★";
  // const rating2 ="⭐⭐⭐★★";
  // const rating3 ="⭐⭐⭐⭐⭐";
  

  return (
    <div className='app__review'>
    <div className='app__review-title'>
      <h1>Meet our team!</h1>
    </div>
    <div className='app__review-content'>
      <ReviewCard name={name1}  role={role1} img={pic1} />
      <ReviewCard name={name2}  role={role2} img={pic2} />
      <ReviewCard name={name3}  role={role3} img={pic3} />
    </div>
    </div>
  )
}

export default Review