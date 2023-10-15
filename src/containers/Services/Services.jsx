import React from 'react';
import './Services.css'
import Valentine from '../../images/valentine.jpg';
import Mother from '../../images/mothersday.webp'
import Wedding from '../../images/wedding.jpg'
const Services = () => {
  return (
    <div className='app__services'>
      <div className='app__services-weddings'>
      <img src={Wedding} alt="wedding" />
      <div className='app__services-weddings-content'></div>
      </div>
      <div className='app__services-valentine'>
      <div className='app__services-valentine-content'></div>
        <img src={Valentine} alt="valentine" />
      </div>
      <div className='app__services-mother'>
        <img src={Mother} alt="mothers day" />
        <div className='app__services-mother-content'></div>
      </div>
      {/* <div className='app__services-'></div>
      <div className='app__services'></div> */}
    </div>
  )
}

export default Services