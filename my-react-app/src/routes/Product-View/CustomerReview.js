import { Star } from '@mui/icons-material';
import { Button, Grid, Typography} from '@mui/material';
import React from 'react';
import './Product-View.scss'


const CustomerReview = () => {
  return (
    <>
    <Grid container sx={{justifyContent:'center'}}>
        <Typography sx={{fontSize: '1.7rem', fontWeight: '700'}}>Customer Reviews</Typography>
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
            <Button className='btnask'>Ask A Question</Button>
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
            <Typography sx={{ textAlign: 'center'}}>06/15/2023</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className='custname'>G.D.</Typography>
          <Typography className='custcoment'>best combo</Typography>
          <Typography>it is one of the best products that dot&key has!!!! I love it. this is my 2nd time 
            buying and I already see so much difference on my skin. I love it. 10/10 recommended.</Typography>
        </Grid>
      </Grid>
      <hr style={{width: '100%', margin: '1em'}} />
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography sx={{ textAlign: 'center'}}>06/14/2023</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className='custname'>Anonymous</Typography>
          <Typography className='custcoment'>must buy</Typography>
          <Typography>money saving combo</Typography>
        </Grid>
      </Grid>
      <hr style={{width: '100%', margin: '1em'}} />
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography sx={{ textAlign: 'center'}}>04/14/2023</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className='custname'>Manisha Chakraborty</Typography>
          <Typography className='custcoment'>Skin texture is better</Typography>
          <Typography>I liked the whole package of vitamin C from foam wash, serum, moisturizer and spf. 
            My skin is little bit brighter now and hope it will be more brighter.</Typography>
        </Grid>
      </Grid>
      <hr style={{width: '100%', margin: '1em'}} />
      <Grid container>
        <Grid item xs={4}>
            <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",m:'0.5em 0 2em'}}>
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
                <Star sx={{ color: '#FFCE51',fontSize:20 }} />
            </Typography>
            <Typography sx={{ textAlign: 'center'}}>04/05/2023</Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography className='custname'>Sindhya Nadar</Typography>
          <Typography className='custcoment'>Feel Fresh with Vitamin C booster</Typography>
          <Typography>First time using dot & Key product and I must say I have already fallen in love 
            with the product. True to the description.<br />
            I have been searching for the sunscreen that won't leave white cast on my skin for long and 
            finally found it and it amazing.</Typography>
        </Grid>
      </Grid>
        <hr style={{width: '100%', margin: '1em'}} />
    </Grid>
    </>
  )
}

export default CustomerReview