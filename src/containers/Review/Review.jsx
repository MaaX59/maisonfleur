import React from 'react'
import './Review.css'
import ReviewCard from '../../components/ReviewCard'
import pic1 from '../../images/review1.jpg'
import pic2 from '../../images/review2.jpg'
import pic3 from '../../images/review3.jpg'

const Review = () => {

  const name1 ="Helen of Troy";
  const name2 ="Nikki";
  const name3 ="Edna McGuffin";

  const comment1 ="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ";
 
  const rating1 ="⭐⭐⭐⭐★";
  const rating2 ="⭐⭐⭐★★";
  const rating3 ="⭐⭐⭐⭐⭐";
  

  return (
    <div className='app__review'>
    <div className='app__review-content'>
      <ReviewCard name={name1}  comment={comment1} img={pic1} rating={rating1}/>
      <ReviewCard name={name2}  comment={comment1} img={pic2} rating={rating2}/>
      <ReviewCard name={name3}  comment={comment1} img={pic3} rating={rating3}/>
    </div>
    </div>
  )
}

export default Review