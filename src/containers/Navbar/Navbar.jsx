import {React, useState} from 'react'
import './Navbar.css'
import Bouquet from '../../images/rose.png'
import Hamburger from 'hamburger-react'


const Navbar = () => {
  const [open, setOpen] = useState(false)
  return (
    <div className='app__navbar'>
      <div className='app__navbar-logo'>
      <img src={Bouquet} alt="bouquet" />
      Maison De La Fleur</div>
      <div className='app__navbar-menu'>
        <Hamburger toggled={open} toggle={setOpen}/>
        {open && (
          <div className='app__navbar-menu-popup'> 
          <ul>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
            <li>
              <a href=''></a>
            </li>
          </ul>
      </div>
        )}
      </div>
    </div>
  )
}

export default Navbar