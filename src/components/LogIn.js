import React, { useState } from 'react'
import { Typography, Box , Checkbox} from '@mui/material';
import SignIn from './SignIn';





const LogIn = () => {
    const[isAuthenticated, setIsAuthenticated] = useState(false);
    
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const handleSignIn = (success)=>{
        setIsAuthenticated(success);
  
        
    }

    
    return (
      <div>
          {isAuthenticated ? (
               <Box>
               <Typography variant="h3" align="center" gutterBottom>
                 Welcome, User!
               </Typography>
               <Checkbox {...label} checked sx={{width:'100%', marginTop:'10%', height:'80px'}} />

               <Typography variant="h5" align="center">
                 You have successfully signed in.
               </Typography>
             </Box>
             
          ) :(
              <>
              <SignIn onSignIn={handleSignIn}  />
               </>
            
          )} 
         
      </div>
    )
  }

export default LogIn;
