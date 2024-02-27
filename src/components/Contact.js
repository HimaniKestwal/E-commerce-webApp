import React from "react";
import { Button, Container, Grid, TextField, Typography, } from "@mui/material";

const ContactPage = () => {
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission logic here
    };
  
    return (
      <Container  maxWidth="sm">
        <Typography variant="h4" gutterBottom  margin={'4% 0 8% 40%'}>
          Contact Us
        </Typography>
        <Typography variant="body1" gutterBottom>
          Have a question or feedback? Reach out to us using the form below.
        </Typography>
        <form onSubmit={handleSubmit} >
          <Grid container spacing={3}>
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                label="Name"
                variant="outlined"
                margin="normal"
              />
            </Grid>
            <Grid item xs={12} >
              <TextField
                required
                fullWidth
                label="Email"
                variant="outlined"
                margin="normal"
                type="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                label="Message"
                variant="outlined"
                margin="normal"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button
                type="submit"
                variant="contained"
                color="primary" 
                sx={{marginLeft:'40%'}}
              >
                Submit
              </Button>
            </Grid>
          </Grid>
        </form>
      </Container>
    );
  };
  
  export default ContactPage;
  