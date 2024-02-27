// Product.js
import React from 'react';
import { Card, CardContent, Typography, Button, Grid, CardMedia, CardActions, Fab } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
 

const Product = ({ product, onAddToCart }) => (
    <Grid item xs={3} spacing={6}> 
  <Card sx={{maxWidth:345,  marginBottom: 10 }}>
    <CardMedia  component="img" alt={product.name} height="200" width='100%' image={product.img} />
    <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            Rs {product.price} /-
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {product.name}
          </Typography>
        </CardContent>
        <CardActions>
          
          <Fab disabled aria-label="like" color='red'>
        <FavoriteIcon/>
      </Fab>
  
          <Button size="small" variant="contained" onClick={() => onAddToCart(product)}>
            Add to cart
          </Button>
        </CardActions>
  </Card>
  </Grid>
);

export default Product;
