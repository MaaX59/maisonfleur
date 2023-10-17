import React from 'react'
import './ReviewCard.css';

const ReviewCard = ({img, name, comment, rating}) => {
  return (
    <div className='app__reviewcard'>

    <div className='app__reviewcard-left'>
    <div className='app__reviewcard-left-pic'>
        <img src={img} alt="review pic" />
        </div>
        <div className='app__reviewcard-left-name'>
            <h2>{name}</h2>
        </div>
    </div>

    <div className='app__reviewcard-right'>
        <div className='app__reviewcard-right-rating'>
        {rating}
        </div>
        <div className='app__reviewcard-right-comment'>
            <h3>{comment} </h3>
        </div>
    </div>

    </div>


    
  )
}

export default ReviewCard