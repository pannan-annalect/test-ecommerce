import { Star } from '@mui/icons-material';
import { Button, Grid, Typography} from '@mui/material';
import React from 'react';


const CustomerReview = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center'}}>
        <Typography >Customer Reviews</Typography>
        <Grid container sx={{justifyContent:'center'}}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
        </Grid>
        <Grid container sx={{justifyContent:'center', flexDirection:'column', alignItems: 'center'}}>
            <Typography>Based on 10 reviews</Typography>
            <Button>Ask A Question</Button>
        </Grid>
        {/* <Grid container sx={{justifyContent:'center'}}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
        </Grid> */}
    </Grid>

    <Grid container>
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography></Typography>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography></Typography>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography></Typography>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography></Typography>
        </Grid>
        <Grid item xs={8}></Grid>
      </Grid>
    </Grid>
    </>
  )
}

export default CustomerReview