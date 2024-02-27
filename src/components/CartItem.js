import React from "react";
import { Button, Card, CardContent, Typography, CardActions, Link, CardMedia, Grid } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';


const CartItem = ({product, removeFromCart, addMoreItems}) => (
   
  <Card style={{ marginBottom: 10 }}>
     <Grid sx={{display:'flex'}}>
    <CardMedia
      component="img"
      alt={product.name}
      height="200"
      image={product.img}
      sx={{width: 100, height: 100}}
    />

    <CardContent>
      <Typography variant="body1">{product.name}</Typography>
      <Typography variant="h6"> Rs {product.price} /-</Typography>
      
    </CardContent>
    </Grid>
    <CardActions>
      
        <Button
          size="small"
          variant="outlined"
          onClick={()=> addMoreItems(product)}
        >
          <AddIcon/>
        </Button>
      

      <Button
        size="small"
        variant="contained"
        onClick={() => removeFromCart(product.id)} // Use onRemoveFromCart to remove the item from the cart
      >
        Remove from cart
      </Button>
    </CardActions>
  </Card>
  
);

export default CartItem;
