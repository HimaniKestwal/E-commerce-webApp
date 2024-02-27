import { Card, Grid, Paper, Typography, Link, TextField, Button } from "@mui/material";
import React from "react";
import FindInPageIcon from '@mui/icons-material/FindInPage';
const Store = () => {


  return (
    <Paper>
      <Grid  container sx={{backgroundColor:'skyblue'}}>
        <Grid item xs={9}>
        <Typography variant='h4'  marginLeft={20} fontFamily={'satisfies'} >New Arrivals for you!    Check out our selection of products</Typography>   
        </Grid>

        <Grid item xs={2}>
        {/* <TextField  fullWidth label='Search...' variant="text" sx={{backgroundColor:'white', height:'40px' }} /> */}
        <TextField id="standard-basic" label="Search.." variant="standard" fullWidth size="small" sx={{backgroundColor:'lightslategrey'}} />
        </Grid> 
       <Grid item xs={1}> 
       <Button variant="outlined"  size="small" sx={{backgroundColor:'lightslategrey'}} ><FindInPageIcon sx={{width:'100%', height:'37px', color:'green'}} /></Button> 
        </Grid>
      </Grid>

      <Card>
        <Grid container sx={{ background: "yellow" }}>
          <Grid item xs={3}>
            <Link href = '/products'>
            <img
              src="https://images-static.nykaa.com/uploads/e2fea6c3-786a-41f4-8435-1d3fb1f35cfd.jpg?tr=w-400,cm-pad_resize"
              width={"60%"}
              height={200}
            />
            </Link>
          </Grid>

          <Grid item xs={3}>
          <Link href ='/products'>
            <img
              src="https://img.freepik.com/free-photo/cute-woman-bright-hat-purple-blouse-is-leaning-stand-with-dresses-posing-with-package-isolated-background_197531-17610.jpg"
              width={"60%"}
              height={200}
            /> </Link>
          </Grid>

          <Grid item xs={3}>
          <Link href ='/products'>
            <img
              src="https://assets.materialup.com/uploads/7018a3fa-f967-4dd3-8fe7-a649c5aa33a1/preview.jpg"
              width={"60%"}
              height={200}
            />
            </Link>
          </Grid>

          <Grid item xs={3}>
          <Link href ='/products'>
            <img
              src="https://media.istockphoto.com/id/487745566/photo/woman-sitting-on-sofa-with-colorful-shoes-and-bags-shopping.jpg?s=612x612&w=0&k=20&c=pPfwgUbKdFcyoSufzRjGptjPaDFMCPpyJ85hmR2NNXg="
              width={"60%"}
              height={200}
            />
            </Link>
          </Grid>
        </Grid>

        <Grid container sx={{backgroundColor:'yellow'}} >
        <Grid item xs={6}>
          <img
            src="https://cioviews.com/wp-content/uploads/2021/08/9.-Article.jpg"
            width={696} height={466}
            
          />
        </Grid>

        <Grid item xs={6}>
          <img src="https://media.licdn.com/dms/image/D4E12AQE-DJIg0G8ZtQ/article-cover_image-shrink_720_1280/0/1689183189706?e=2147483647&v=beta&t=mTHI-MMdBegVFzQt3FkeLrezk1Bz4hJKQnsMAX8it1Y" 
          width={700} height={466}/>
        </Grid>

        </Grid>

      </Card>
    </Paper>
  );
};

export default Store;
