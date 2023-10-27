import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
      <div className='app__contact' id='contact'>
        <div className='app__contact-title'>Contact Us</div>
        <div className='app__contact-content'>
          <div className='app__contact-content-email'>Email</div>
          <div className='app__contact-content-hours'>Opening Hours</div>
          <div className='app__contact-content-phone'>Phone Number</div>

        </div>

      </div>
    )
  }
  
  export default Contact