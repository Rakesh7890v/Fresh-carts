import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import logo from './images/logo.png';

const Header = ({cartCount, handleFont }) => {

  
  return (
    <div>
        <div className="head-container">
            <div className="logo">
                <img src={logo} alt='Logo'></img>
            </div>
            <div className="icons">
              <FontAwesomeIcon onClick={handleFont} icon={faShoppingCart} className='cartIcon'/>
              <div className="cart-count">
                <p>{cartCount}</p>
              </div>
          </div> 
        </div>
        
        <div className="categ-off">
          <div className="categories">
            <div className="head"></div><h2>Categories</h2>
            <ul>
              <li className='animate1'>Dry Fruits</li>
              <li className='animate1'>Fresh Fruits</li>
              <li className='animate2'>Bread</li>
              <li className='animate2'>Choclates</li>
              <li className='animate3'>Creams</li>
              <li className='animate3'>Peanuts</li>
            </ul>
          </div>

          <div className="offers-container">
             <h1 className='headAnimate'>Fresh fruits & fresh vegetables</h1>
             <h2 className='headAnimate'>upto <span>50% off</span></h2>
             <p className='animate1'>✔ save your cost</p>
             <p className='animate2'>✔ Quality and fresh</p>
             <p className='animate3'>✔ FREE SHIPPING</p>
             <p className='buyNow animate4'>Buy now</p>
          </div> 
        </div>
        <hr/>

    </div>
  )
}

export default Header