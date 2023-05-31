import React from "react";
import { Typography,Card,CardActions,CardContent,CardMedia,Button, Grid } from "@mui/material";
import ImageCarousel from "../../components/image-carousel/ImageCarousel.component";
import CustomerSection from "../../components/customer-section/CustomerSection.component";
import CardCarousel from "../../components/card-carousel/CardCarousel.component";
import './home.scss';
import {Star} from '@mui/icons-material';
import { Link } from "react-router-dom";


const HomeComponent = () => {
    return(
        <>
        <ImageCarousel images={[
    "//www.dotandkey.com/cdn/shop/files/vit_c_range_8fe898e8-20cf-48b8-b793-7636da885b89.jpg",
    "//www.dotandkey.com/cdn/shop/files/pro_desk_552a0e39-53bd-4a71-98da-ceb1a8d819b7.jpg",
    "//www.dotandkey.com/cdn/shop/files/CATE_DESK_70f0f8fb-6857-4d23-bb4f-86449f2dcbd1.jpg",
  // "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  // "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]} />
<CustomerSection  images={[
  // "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  // "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  // "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  // "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  // "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]}/>
<Grid container>
<Card className="product-listing" sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 250 }}
        image="//www.dotandkey.com/cdn/shop/files/barrierfc_177c060e-1fd0-4d82-a057-44d0f2bf8a2a_large.jpg"
        title="green iguana"
      />
      <CardContent sx={{pt:1}}>
        <Typography className="product-rating" sx={{display: "flex",justifyContent:"center"}}>
        <Star sx={{ color: '#FFCE51',fontSize:16 }} />  
        <span className="rating">4.8 / 5</span>
        <span className="count">(278)</span>
        </Typography>
        <Typography className="product-title" gutterBottom variant="h2" component="div">
            Lorem Ipsum
        </Typography>
        <Typography className="product-desc">
        Lorem ipsum dolor sit amet
        </Typography>
        <Typography className=""></Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
</Grid>
<CardCarousel slidesToShow={4} slidesToScroll={4} data = {[1, 2, 3, 4, 5, 6, 7, 8]}>
  <div>
   <div className="card-container">
    <div className="img">
      <img width="217" src="https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_1747d970-e108-40f7-93dd-d5818262c85d_large.jpg?v=1684820542"/>
    </div>
    <div className="content">
      <div className="product-rating">
        <span className="star"> </span>     
        <span className="rating">4.8/5</span>
        <span className="count">(278)</span>
      </div>
      <div className="product-name">Vitamin C + E SPF 50 Sunscreen</div>
      <div className="price-product">
        <div className="product-desc">Waterlight Texture </div>
        <div className="price">Rs: 495.00</div>
      </div>
    </div>
    <div className="catbutton">ADD TO CART</div>
   </div>
  </div>
</CardCarousel>
        <section className="best-sellers">
          <Grid container>
            <Grid item xs={12}>
          <Typography variant="h3" className="subtitle" textAlign={"center"}>Our</Typography>
              <Typography variant="h2" className="hometitle" textAlign={"center"}>Bestsellers</Typography>
              <ul className="sellers-category">
                <li>
                  <Link>Face Creams</Link>
                </li>
                <li>
                  <Link>Face Creams</Link>
                </li>
                <li>
                  <Link>Face Creams</Link>
                </li>
                <li>
                  <Link>Face Creams</Link>
                </li>
              </ul>
          </Grid>
          </Grid>
        </section>
        <section className="spotlight">
          <Typography variant="h3" className="subtitle" textAlign={"center"}>In the</Typography>
          <Typography variant="h2" className="hometitle" textAlign={"center"}>Spotlight</Typography>
          <Grid container>
            <Grid item xs={12} md={6}>
              <img src="//www.dotandkey.com/cdn/shop/files/desk-45_ccef1097-f1b8-4f09-8ed3-7d0837ea216a.webp" />
            </Grid>
            <Grid item xs={12} md={6}>
              <img src="//www.dotandkey.com/cdn/shop/files/desk_resize.jpg" />
            </Grid>
            <Grid item xs={12}>
            <img src="//www.dotandkey.com/cdn/shop/files/desk-47.webp" />
            </Grid>
          </Grid>
        </section>
      </>
    )
}

export default HomeComponent;
