import React from 'react';
import Product from './Product';
import { Grid, Paper } from '@mui/material'
import { useCartContext } from './E-com';


const ProductList = () => {
 const{products, addToCart} = useCartContext();

 return (
  <Paper sx={{width:'80%', marginLeft:'10%'}}>
    <h2>Product List</h2>
    <Grid container spacing={2}>
    {products.map((product) => (
      <Product key={product.id} product={product} onAddToCart={addToCart} />
    ))}
    </Grid>
  </Paper>
);

};
export default ProductList;
