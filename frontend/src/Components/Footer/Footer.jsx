import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/logo_big.png'
import instragram_icon from '../Assests/instagram_icon.png'
import pinterest_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footer_logo} alt=''/>
            <p>SHOPPER</p>
        </div>
        <ul className="footer-links">
            <li>Company</li>
            <li>Products</li>
            <li>Offices</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
        <div className="footer-scial-icon">
            <div className="footer-icons-container">
                <img src={instragram_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={pinterest_icon} alt=''/>
            </div>
            <div className="footer-icons-container">
                <img src={whatsapp_icon} alt=''/>
            </div>
            <div className="footer-copyright">
                <hr/>
                <p>Copyright @2023 - All Right Reservered</p>
            </div>
        </div>
    </div>
  )
}

export default Footer