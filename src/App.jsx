import React, { useState } from 'react';
import ProductList from './ProductList';
import CartItem from './CartItem'; // Assuming this is the Cart component
import './App.css';
import AboutUs from './AboutUs';

function App() {
  const [showProductList, setShowProductList] = useState(false);
  const [showCart, setShowCart] = useState(false); // State to manage cart visibility

  const handleGetStartedClick = () => {
    setShowProductList(true);
  };

  const toggleCartVisibility = () => {
    setShowCart(!showCart); // Toggle cart visibility state
  };

  return (
    <div className="app-container">
      <div className={`landing-page ${showProductList ? 'fade-out' : ''}`}>
        <div className="background-image"></div>
        <div className="content">
          <div className="landing_content">
            <h1>Welcome To Paradise Nursery</h1>
            <div className="divider"></div>
            <p>Where Green Meets Serenity</p>

            <button className="get-started-button" onClick={handleGetStartedClick}>
              Get Started
            </button>
          </div>
          <div className="aboutus_container">
            <AboutUs />
          </div>
        </div>
      </div>
      <div className={`product-list-container ${showProductList ? 'visible' : ''}`}>
        <ProductList toggleCart={toggleCartVisibility} /> {/* Pass toggle function to ProductList */}
      </div>
      {showCart && <CartItem onContinueShopping={() => setShowCart(false)} />} {/* Render CartItem if showCart is true */}
    </div>
  );
}

export default App;