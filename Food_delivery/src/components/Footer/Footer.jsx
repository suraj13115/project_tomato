import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
    <div className='footer-content'>
   <div className='footer-content-left'>
   <img src={assets.logo} alt="" />
  <p>i wan to shy dhdkjds l urfnmcnvkjrshfk flkdsjldshfehf reorhfu k  difdiuhfr foid iuuhfdsi dkfds iusfh idsh diuhdf ufds ufdhfdsoifd ifdsoieerwfjndc,m ffhkjfh kdsfjhslkahow ma</p>
 <div className='footer-social-icons'>
    <img src={assets.facebook} alt="" />
    <img src={assets.twitter} alt="" />
 <img src={assets.instagram} alt="" />
  </div>
    </div>
    <div className='footer-content-center'>
        <h2>COMAPNY</h2>
        <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Delivery</li>
            <li>Privacy plicy</li>
        </ul>
    </div>
      <div  className='footer-content-right'>
      <h2>GET IN TOUCH</h2>
      <ul>
        <li>56566565</li>
        <li>contact@tomato.com</li>
      </ul>
    </div>
    </div>
  <p className="footer-copyright"> Copyright  2024 Tomato - Food Delivery All Rights Reserved
  </p>
    </div>

  )
}

export default Footer
