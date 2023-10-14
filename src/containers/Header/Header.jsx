import React from 'react'
import './Header.css'
import Bouquet from '../../images/flowers.png'

const Header = () => {
  return (
    <div className='app__header'>
      <div className='app__header-text'>
        <h1>Exclusive High-Style</h1>
        <h2>Floral arrangements</h2>
        <button> Shop Now</button>
      </div>
      <div className='app__header-img'>
        <img src={Bouquet} alt="bouquet" />
      </div>
    </div>
  )
}

export default Header