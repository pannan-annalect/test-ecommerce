import { Typography,Card,CardActions,CardContent,Button, Grid } from "@mui/material";
import "./ProductListing.styles.scss";
import productimage from '../../assets/images/best-seller.jpg';
import {Star} from '@mui/icons-material';
import { Link } from "react-router-dom";

function ProductListing() {
  return (
    <>
    <div className="listing-outer">
        <Card className="product-listing">
            <div className="product-image">
                <img src={productimage} alt=""/>
            </div>
        <Link to='/product-view'>
            <CardContent sx={{py:1}}>
                <Typography className="product-rating" sx={{display: "flex",justifyContent:"center",mb:1}}>
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />  
                <span className="rating">4.8 / 5</span>
                <span className="count">(278)</span>
                </Typography>
                <Typography className="product-title" gutterBottom variant="h2" component="div">
                    Lorem Ipsum 
                </Typography>
                <Typography className="product-desc" marginBottom={1}>
                Lorem ipsum dolor sit amet
                </Typography>
                <Grid container>
                <Grid item xs={6} sx={{textAlign:"center"}}>
                <Typography className="actual-amt">Rs. 495.00</Typography>
                </Grid>
                <Grid item xs={6}>
                <Typography className="discounted-amt" sx={{textAlign:"center"}}>Rs. 480.00</Typography>
                </Grid>
                </Grid>
            </CardContent>
        </Link>
        <CardActions sx={{p:0}}>
            <Button variant="contained" sx={{borderRadius:0,width:'100%'}}>Add to Cart</Button>
        </CardActions>
        </Card>
    </div>
    </>
  );
}

export default ProductListing;