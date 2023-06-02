import React, { useState } from 'react'
import './Header.css'
import './HeaderMedia.css'
import x from '../../imag/x.png'
import logo2 from '../../imag/logo.png'
import burg from '../../imag/burger.jpg'
import logo from '../../imag/haypak.png'
import fac from '../../imag/facebook.png'
import ins from '../../imag/instagram.png'
import youtube from '../../imag/youtube.png'
import phone from '../../imag/phone.png'
import letter from '../../imag/letter.png'
import { Link, NavLink } from "react-router-dom";

const Header = () => {

  const [burger, setBurger] = useState(false)


  const CloseClick = () => {
    setBurger(!burger)
  }

  const HandleClick = () => {
    setBurger(!burger)
  }




  return (
    <div className='div_header'>
      <div className='div_logo'>
        <img src={logo2} alt="" className='logo2' />
        <img src={logo} alt="" className='logo' />
        <p>Artadroxakan sarqavorumner</p>
      </div>

      <div className='menu_main'>
        <NavLink to={"/"}>Տուն</NavLink>
        <NavLink to={"/about"}>Մեր մասին</NavLink>
      </div>

      <div className='div_main'>
        <div className='div_cont'>
          <div className='cont_phone'>
            <img src={phone} alt="" />
            <span> +374 (77) 08-99-81</span>
          </div>
          <div className='cont_letter'>
            <img src={letter} alt={letter} />
            <span> sale@landpacking.com</span>
          </div>


        </div>
        <div className='div_main_right'>
          <div className='div_networks'>

            <button onClick={HandleClick} className='networks_button'><img src={burg} alt="" className='burg' /></button>

            <img src={fac} className='fac' alt="" />
            <img src={ins} className='ins' alt="" />
            <img src={youtube} className='you' alt="" />
          </div>
        </div>
      </div>
      { burger && <div className='menu_burger'>

        <div className='div_burder'  >
          <div className='div_main_x'>
            <div className='div_x'>
              <img src={x} alt="" onClick={CloseClick}/>
            </div>
            
          </div>
          <NavLink onClick={CloseClick} to={"/"}>Տուն</NavLink>
          <NavLink onClick={CloseClick} to={"/about"}>Մեր մասին</NavLink>
          <div className='networks_burger'>
            <img src={fac} className='fac' alt="" />
            <img src={ins} className='ins' alt="" />
            <img src={youtube} className='you' alt="" />
          </div>
        </div>

      </div>}
    </div>
  )
}

export default Header