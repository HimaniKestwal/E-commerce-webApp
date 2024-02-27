import React from 'react';
import CartItem from './CartItem';
import { Button, Paper, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { useCartContext } from './E-com';


const Cart = () =>{ 
  const{cartItems, removeFromCart, totalPrice, addMoreItems} = useCartContext();
  
  return(
  <Paper sx={{width:'70%', marginLeft:'15% '}}>
    <h2>Shopping Cart</h2>
    {cartItems.map((item) => (
      <CartItem key={cartItems.id} product={item} removeFromCart={removeFromCart} addMoreItems={addMoreItems} />
      
    ))}
    
    <Typography variant='h6'>Total: Rs {totalPrice} /-</Typography>
    <Link to='/checkout'>
    <Button variant='contained' fullWidth>Buy Now</Button>
    </Link>
  </Paper>
);
};

export default Cart;
