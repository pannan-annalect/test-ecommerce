import React from "react";
import { Typography,Card,CardActions,CardContent,CardMedia,Button, Grid, Box } from "@mui/material";
import ImageCarousel from "../../components/image-carousel/ImageCarousel.component";
import CustomerSection from "../../components/customer-section/CustomerSection.component";
import CardCarousel from "../../components/card-carousel/CardCarousel.component";
import './home.scss';
import {Star,Verified} from '@mui/icons-material';
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
        image="//www.dotandkey.com/cdn/shop/files/vitcsunscreen_large.jpg"
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
              <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Our</Typography>
              <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Bestsellers</Typography>
              <ul className="home-categories">
                <li>
                  <Link className="active">Face Creams</Link>
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
          <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>In the</Typography>
          <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Spotlight</Typography>
          <Grid container>
            <Grid item xs={12} md={6} className="sl-left">
              <img src="//www.dotandkey.com/cdn/shop/files/desk-45_ccef1097-f1b8-4f09-8ed3-7d0837ea216a.webp" />
            </Grid>
            <Grid item xs={12} md={6} className="sl-right">
              <img src="//www.dotandkey.com/cdn/shop/files/desk_resize.jpg" />
            </Grid>
            <Grid item xs={12} className="sl-bottom">
            <img src="//www.dotandkey.com/cdn/shop/files/desk-47.webp" />
            </Grid>
          </Grid>
        </section>

        <section className="top-categories">
        <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Shop Our</Typography>
              <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Top Categories</Typography>
              <ul className="home-categories">
                <li>
                  <Link className="active">Skin</Link>
                </li>
                <li>
                  <Link>Skin</Link>
                </li>
                <li>
                  <Link>Skin</Link>
                </li>
                <li>
                  <Link>Skin</Link>
                </li>
              </ul>
            </Grid>
          </Grid>
        </section>

        <section>
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Watch it, Buy it</Typography>
              <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Love it</Typography>
            </Grid>
          </Grid>
        </section>

        <section className="app-banner">
          <Link>
            <img src="//www.dotandkey.com/cdn/shop/files/0_new_appArtboard_1_1_1.png"/>
          </Link>
        </section>

        <section>
          <Grid container>
            <Grid item xs={12}>
            <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Shop by</Typography>
              <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Ingredients</Typography>
            </Grid>
          </Grid>
        </section>

        <section className="when-shared">
          <Grid container>
            <Grid item xs={12}>
              <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>When shared</Typography>
              <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Love is greater</Typography>
              <div>
                <img className="" src="https://www.dotandkey.com/cdn/shop/files/Untitled-2_6_1.png" />
              </div>
              
            </Grid>
          </Grid>
        </section>

        <section className="container featured-content">
          <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>With uncompormaised efficancy</Typography>
          <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Clean Beauty</Typography>
          <Grid container>
            <Grid item xs={12} sx={{px:5}}>
              <Typography variant="body1" className="featured-text" sx={{mb:2}} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ultrices felis nec luctus. Sed vel orci scelerisque, mattis augue eget, <em><strong>pellentesque sem</strong></em>. Proin fermentum est non ante laoreet, in mattis sem posuere. Sed viverra feugiat eros vel scelerisque. Quisque id nulla quis nisl volutpat vestibulum a sed dolor.
              </Typography>
              <Typography variant="body1" className="featured-text" sx={{mb:2}} textAlign={"center"}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ultrices felis nec luctus. Sed vel orci scelerisque, mattis augue eget, pellentesque sem. Proin fermentum est non ante laoreet, in mattis sem posuere. Sed viverra feugiat eros vel scelerisque. <em><strong>Quisque id</strong></em> nulla quis.
              </Typography>
            </Grid>
          </Grid>
        </section>

        <section className="featured-image">
                <Box className="image-details">
                  <img src="//www.dotandkey.com/cdn/shop/files/3-ICONS.png" />
                </Box>
                <Box className="image-details">
                  <img src="//www.dotandkey.com/cdn/shop/files/1-ICONS_b6233563-9f3e-43f6-b158-5205886e2120.png" />
                </Box>
                <Box className="image-details">
                  <img src="//www.dotandkey.com/cdn/shop/files/4-ICONS.png" />
                </Box>
                <Box className="image-details">
                  <img src="//www.dotandkey.com/cdn/shop/files/2-ICONS.png" />
                </Box>
        </section>

        <section className="award-winning">
          <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Award winning</Typography>
          <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Skincare</Typography>
          <Typography variant="body1" className="gencont" textAlign={"center"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur cursus ultrices felis nec luctus. Sed vel orci scelerisque</Typography>
        </section>

        <section className="home-testimonail">
          <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Customer</Typography>
          <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Reviews</Typography>
          <Grid container>
            <Grid item xs={12}>
            <Card className="" sx={{maxWidth:360,margin:'0 auto',boxShadow:'none',overflow:'visible',position:'relative'}}>
              <div className="testimonial-image">
                <img src="//www.dotandkey.com/cdn/shop/files/Venkatesh_S_compact.png" />
              </div>
              <CardContent sx={{paddingTop:'50px',boxShadow:'0 0 5px rgba(0,0,0,.1)',borderRadius:'10px'}}>
                <Typography className="testimonial-rating" sx={{display: "flex"}}>
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                <Star sx={{ color: '#FFCE51',fontSize:16 }} />
                </Typography>
                <Typography className="testimonial-title" gutterBottom component="div" sx={{mx:1,mb:0}}>
                    <em><strong>Lorem Ipsum</strong></em>
                </Typography>
                <Typography className="testimonial-desc" sx={{mx:1}}>
                Lorem ipsum dolor sit ametLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris euismod purus mauris, nec pulvinar nulla tempus eget. Aenean id magna nec purus ornare laoreet. Sed dignissim ullamcorper odio, eget commodo ante dapibus congue. Vivamus ac fermentum ipsum. Vivamus porta leo a augue viverra fringilla vel in mi
                </Typography>
                <Typography className="testimonial-username" sx={{mt:4}}><strong>Name</strong> <Verified sx={{ml:0, color: '#2196f3',fontSize:30 }} /></Typography>
              </CardContent>
            </Card>
            </Grid>
          </Grid>
        </section>
      </>
    )
}

export default HomeComponent;
