import React, { useCallback, useEffect, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './App.css';

const Cart = ({ cart, handleTimes, handleDelete, handleOrderNow, cartCount }) => {

    const [totalAmount, setTotalAmount] = useState(0);

    const handleIncrease = (item) => {
        item.quantity += 1;
        updateTotalAmount();
    }

    const handleDecrease = (item) => {
        if (item.quantity > 1) {
            item.quantity -= 1;
            updateTotalAmount();
        }
    }

    const updateTotalAmount = useCallback(() => {
        let total = 0;
        cart.forEach(item => {
            const price = parseFloat(item.price.replace('$','')) * item.quantity;
            total += price;
        });
        setTotalAmount(total);
    },[cart]);

    useEffect(() => {
        updateTotalAmount();
    }, [cart,updateTotalAmount]);

  return (
    <div className='fruits-cart'>
        <div className="top">
            <h2>Cart Items</h2>
            <FontAwesomeIcon icon={faTimes} className='timesIcon' onClick={handleTimes}/>
        </div>   
        {cartCount === 0 ? <p className='empty-msg'>Cart is Empty</p> : ''}
        {cart && cart.map(item => (
            <div key={item.id}>
                <div className="cart">
                    <div className="product-photo">
                        <img src={item.image} alt={item.pname} />
                    </div>
                    <div className="product-details">
                       <p>{item.pname}</p>
                       <p>{item.price}</p>
                    </div>
                    <div className="quantity-container">
                        <div className="quantity">
                            <button type='submit' onClick = {()=>handleDecrease(item)} >-</button>
                            <div className="qty">{item.quantity}</div>
                            <button type='submit' onClick = {()=>handleIncrease(item)}>+</button>
                        </div>
                        <div className="qty-price">
                            <p>{`$ ${(parseFloat(item.price.replace('$',''))* item.quantity).toFixed(2)}`}</p>
                        </div>    
                        <button className='delete' type='submit' onClick={()=>handleDelete(item.id)}>Delete</button>
                    </div>
                </div><hr/>
            </div>
        ))}
        {cartCount >= 1 && <div className="total-price">
            <b>Total Amount: ${totalAmount.toFixed(2)}</b>
        </div> }      
        {cartCount >= 1 && <div className="order">
            <button type='submit' onClick={()=> handleOrderNow()}>Order Now</button>
        </div>}
    </div>
  )
}

export default Cart;
