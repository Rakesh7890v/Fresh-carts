import React, { useEffect, useState } from 'react';
import Header from './Header';
import Products from './Products';
import Footer from './Footer';
import img1 from './images/apple.jpg';
import img2 from './images/orange.jpg';
import img3 from './images/pineapple.jpg';
import img4 from './images/grapes.jpg';
import img5 from './images/dragon.jpeg';
import img6 from './images/mango.jpg';
import img7 from './images/kiwi.jpg';
import img8 from './images/pomegranate.jpg';
import img9 from './images/watermelon.jpg';
import './App.css';

function App() {

  const [search, setSearch] = useState('');
  const [searchResults, setSearchResults] = useState(['']);
  const [cart, setCart] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [isShow, setIsShow] = useState(false);
  const [orderShow, setOrderShow] = useState(false);
  const [loading, setLoading] = useState(false);

  const [ products, setProducts] = useState([
    {
      id: 1,
      image: img1,
      pname: "Apple",
      quantity: 1,
      price: "$25",
      message: null
    }, {
      id: 2,
      image: img2,
      pname: "Orange",
      quantity: 1,
      price: "$23",
      message: null
    }, {
      id: 3,
      image: img3,
      pname: "Pineapple",
      quantity: 1,
      price: "$30",
      message: null
    }, {
      id: 4,
      image: img4,
      pname: "Grapes",
      quantity: 1,
      price: "$35",
      message: null
    }, {
      id: 5,
      image: img5,
      pname: "Dragon",
      quantity: 1,
      price: "$40",
      message: null
    }, {
      id: 6,
      image: img6,
      pname: "Mango",
      quantity: 1,
      price: "$29",
      message: null
    }, {
      id: 7,
      image: img7,
      pname: "Kiwi",
      quantity: 1,
      price: "$33",
      message: null
    }, {
      id: 8,
      image: img8,
      pname: "Pomegranate",
      quantity: 1,
      price: "$35",
      message: null
    }, {
      id: 9,
      image: img9,
      pname: "Watermelon",
      quantity: 1,
      price: "$25",
      message: null
    }
  ]);
 
  useEffect(()=> {
    const searchedResults = products.filter((product)=> product.pname && product.pname.toLowerCase().includes(search.toLowerCase()));
    setSearchResults(searchedResults);
    const savedCart = JSON.parse(localStorage.getItem('cart'));
    setCart(savedCart);  
    setCartCount(savedCart.length);
  },[products, search]);

  const handleSubmitCart = (id) => {
    const cartItem = products.find((product) => product.id === id);
    const existingCartItem = cart.find((item) => item.id === id);
  
    setTimeout (()=> {
    setProducts((prevProducts) =>
      prevProducts.map((product) => ({ ...product, message: null }))
    );
    },3000);
  
    if (existingCartItem) {
      // If the item is already in the cart, show an error message
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, message: 'error' } : product
        )
      );
    } else if (cartItem) {
      setProducts((prevProducts) =>
        prevProducts.map((product) =>
          product.id === id ? { ...product, message: 'success' } : product
        )
      );
  
      setCart((prevCart) => [...prevCart, { ...cartItem }]);
      setCartCount((prevCount) => {
        const newCount = parseInt(prevCount, 10);
        return isNaN(newCount) ? 1 : newCount + 1;
      });
  
      localStorage.setItem('cart', JSON.stringify([...cart, { ...cartItem }]));
    }
  };
  
  

  const handleDelete = (id) => {
    const delet = cart.filter(cart => cart.id !== id)
    setCart(delet);
    setCartCount(
      prevCount => prevCount -1
    ); 
    localStorage.setItem('cart',JSON.stringify(cart));
  }

  const handleFont = () => {
    setIsShow(true);
  }

  const handleTimes = () => {
    setIsShow(false);
  }

  const handleOrderNow = () => {
    if (cartCount === 0) {
      setOrderShow(false);
    } else {
      setCart([]);
      setIsShow(false);
      setCartCount(0);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOrderShow(true);
      }, 2000);
      localStorage.setItem('cart', JSON.stringify([]));
    }
  };

  const handleContinue = () => {
    setOrderShow(false);
  }

  return (
    <div className="App">
      <Header 
        cartCount={cartCount} 
        handleFont={handleFont}
      />
      <Products 
        products={products} 
        handleSubmitCart={handleSubmitCart}
        cart={cart} isShow={isShow} 
        handleTimes={handleTimes} 
        handleDelete={handleDelete}
        orderShow = {orderShow}
        loading={loading}
        handleOrderNow={handleOrderNow}
        handleContinue={handleContinue}
        search={search} 
        setSearch={setSearch} 
        cartCount={cartCount}
      />
      <Footer />
    </div>
  );
}

export default App;
