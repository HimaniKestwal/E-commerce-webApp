import React, { createContext, useContext, useState } from "react";
import { ReactDOM } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Cart from "./Cart";
import ProductList from "./ProductList";
import products from "./Data";
import Navbar from './Navbar';
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Checkout from "./Checkout";
import Store from "./Store";
import ContactPage from "./Contact";


const cartContext = createContext();

export const useCartContext = ()=> useContext(cartContext);

const PComponent = () => {
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const addToCart = (product) => {
    const updatedCart = [...cartItems, product];
    const updatedTotalPrice = totalPrice + product.price;
    setCartItems(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  const clearCart = () => {
    setCartItems([]);
    setTotalPrice(0);
  };

  const removeFromCart = (productId) => {
    const updatedCart = cartItems.filter((item) => item.id !== productId);
    setCartItems(updatedCart);
  
    
  };

  const addMoreItems = (product) => {
    const updatedCart = [...cartItems, product];
    const updatedTotalPrice = totalPrice + product.price;
    setCartItems(updatedCart);
    setTotalPrice(updatedTotalPrice);
  };

  return (
    <cartContext.Provider value={{addToCart, products, cartItems, removeFromCart, totalPrice, addMoreItems, }}>
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Store />}
          />
          <Route
            path="/products"
            element={<ProductList />}
          />
          <Route
            path="/cart"
            element={
              <Cart/>
            }
          />
          <Route  path="/login"  element={<LogIn />}   />
          <Route path="/login/signUp" element={<SignUp />} />
          <Route path='/login/signin' element={<SignIn/>} />
          <Route path='/checkout' element={<Checkout/>} />
          <Route  path="/store"  element={<Store/>}   />
          <Route  path="/contact"  element={<ContactPage/>}   />

        </Routes>
      </div>
    </Router>
    </cartContext.Provider>
  );
};

export default PComponent;
