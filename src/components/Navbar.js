import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Grid } from '@mui/material';

const Navbar = () => (

  <AppBar position="static" >
    <Toolbar>
      
        <img src='https://img.freepik.com/premium-vector/women-fashion-shop-logo-design-inspiration-monochrome-color_500223-509.jpg' width={100} height={70}/>     
      
      <Typography variant="h5" component="div" sx={{ flexGrow: 1 , marginLeft:'30%'}}>
           Browse the Store!
      </Typography>

      <Button color="inherit" component={Link} to="/store">
        Store
      </Button>
      <Button color="inherit" component={Link} to="/products">
        Products
      </Button>
      <Button color="inherit" component={Link} to="/cart">
        Cart
      </Button>
      <Button color="inherit" component={Link} to="/login">
        Login
      </Button>
      <Button color="inherit" component={Link} to="/contact">
        Contact 
      </Button>
    </Toolbar>
  </AppBar>
  
);

export default Navbar;
