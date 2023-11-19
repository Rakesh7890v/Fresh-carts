import React from 'react';
import Cart from './Cart.js';
import img11 from './images/dryfruits.png';
import img12 from './images/cake.png';
import img13 from './images/nuts.png';
import img14 from './images/bread.png';
import img15 from './images/cream.png';
import img16 from './images/tomato.png';
import img17 from './images/corainder.png';
import img18 from './images/cauli.png';

const Products = ({ 
  products, handleSubmitCart , cart,
  isShow,handleTimes, handleDelete,
  orderShow,loading,handleOrderNow, handleContinue,search, setSearch, cartCount}) => {

  return (

    <div>

      {isShow && 
        <div className="cart-container">
            <Cart cart={cart} handleTimes={handleTimes} handleDelete={handleDelete} handleOrderNow={handleOrderNow} cartCount={cartCount}/>
        </div>
      }

      <form onSubmit={(e) => e.preventDefault()}>
        <div className="search">
          <input type="text" placeholder='Search...' value={search} onChange={(e) => setSearch(e.target.value)}/>
          <button type='Search'>Search</button>
        </div>
      </form>
    
    <div className='products'>

        {loading && (
          <div className="loading-container">
            <div className="loading-spinner"></div>
          </div>
        )}

        {!loading && orderShow && (
          <div className="order-products">
              <div className="tick">
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                  <circle className="path circle" fill="none" stroke="#73AF55" strokeWidth="6" strokeMiterlimit="10" cx="65.1" cy="65.1" r="62.1" />
                  <polyline className="path check" fill="none" stroke="#73AF55" strokeWidth="6" strokeLinecap="round" strokeMiterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 " />
                </svg>
              </div>
              <p>Your order has been placed.</p>
              <button type="submit" onClick={() => handleContinue()}>
                Continue
              </button>
          </div>
        )}

      
      {products.map(product => 
          <div className="product" key={product.id}>  
              <div className="top">
                <img src={product.image} alt={product.pname} />
              </div>
              <div className="bottom">
                  <div className="pname">
                      <h3>{product.pname}</h3>
                  </div>
                  <div className="price">
                      <p>{product.price}</p>
                  </div> 

                  {product.message === 'error' && (
                    <div className="message error-message">
                      <p>{`${product.pname} is already added to the cart.`}</p>
                    </div>
                  )}

                  {product.message === 'success' && (
                    <div className="message success-message">
                      <p>{`Successfully added ${product.pname} to cart.`}</p>
                    </div>
                  )}

                  <button className='add' onClick={() => handleSubmitCart(product.id)}>Add to cart</button>
              </div>
        </div>)}
      </div><hr/>

      <div className="top-products">
        <h1>Best Selling</h1>
        <div className="linear-move">
        <div className="tp-container">
          <div className="best-carts"><img src={img11} alt='img11'/></div>
          <div className="best-carts"><img src={img12} alt='img12'/></div>
          <div className="best-carts"><img src={img13} alt='img13'/></div>
          <div className="best-carts"><img src={img14} alt='img14'/></div>
          <div className="best-carts"><img src={img15} alt='img15'/></div>
          <div className="best-carts"><img src={img16} alt='img16'/></div>
          <div className="best-carts"><img src={img17} alt='img17'/></div>
          <div className="best-carts"><img src={img18} alt='img18'/></div>
        </div> 
       </div>  
      </div>
    </div>
  );
}

export default Products