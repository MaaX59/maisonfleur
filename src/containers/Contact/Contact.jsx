import React from 'react'
import './Contact.css'

const Contact = () => {
    return (
      <div className='app__contact' id='contact'>
        <div className='app__contact-title'>Contact Us</div>
        <div className='app__contact-content'>
          <div className='app__contact-content-email'>
           <h1>Email</h1> 
           <h2>Contact@fleurdelamaison.fr</h2>
            </div>
          <div className='app__contact-content-hours'>
            <h1>Opening Hours</h1> 
            <h2></h2>
            </div>
          <div className='app__contact-content-phone'>Phone Number</div>

        </div>

      </div>
    )
  }
  
  export default Contact