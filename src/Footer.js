import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';
import cards from './images/card.png';

const Footer = () => {
  return (
    <div>
        <div className="footer-container">
            <div className="footer-details">
            <div className="shop-details">
               <img src={logo} alt='logIcon'></img> 
               <p>Fresh fruits shops offer a wide range of fruits, including seasonal and non-seasonal varieties. They may also provide organic or locally sourced options.</p>
               <b><FontAwesomeIcon icon={faMapMarkerAlt} /> C,17 Councilar street velapadi, vellore</b>
            </div>
            <div className="card-details">
              <h2>Availabel Payments</h2>
              <img src={cards} alt='Cards-icon'></img>
            </div>
            <div className="user-details">
                <h2>Enter your Details</h2>
                <input type="text" placeholder='Enter your name.' />
                <input type="email" placeholder='Enter your email.' />
                <textarea typeof='text' placeholder='Enter message'></textarea>
                <button className='send'>Send</button>
            </div>
            </div>
            <p className='copy'>Copyright @ 2023. All rights Reserved.</p>
        </div>
    </div>
  )
}

export default Footer