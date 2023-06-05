import React from "react";
import { Typography,Card,CardActions,CardContent,CardMedia,Button, Grid, Box } from "@mui/material";
import ImageCarousel from "../../components/image-carousel/ImageCarousel.component";
import CustomerSection from "../../components/customer-section/CustomerSection.component";
import CardCarousel from "../../components/card-carousel/CardCarousel.component";
import CustomerCollections from "../../components/customer-collections/CustomerCollections.component";
import NewArrivals from "../../components/new-arrivals/NewArrivals.component";
import BestSellers from "../../components/best-sellers/BestSellers.component";
import './home.scss';
import {Star,Verified} from '@mui/icons-material';
import { Link } from "react-router-dom";
import productimage from '../../assets/images/best-seller.jpg';
import bestsellerimage from '../../assets/images/banner-1.jpg';
import sliderimage from '../../assets/images/top-slider-image.jpg';
import featureimage from '../../assets/images/feature-image.png';
import appimage from '../../assets/images/app-image.jpg';
import userimage from '../../assets/images/user-image.png';


const HomeComponent = () => {
    return(
      <>
        <ImageCarousel />
        <CustomerCollections/>
        <CustomerSection  />
        <NewArrivals />
        <BestSellers />

   
        <section className="spotlight">
          <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>In the</Typography>
          <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Spotlight</Typography>
          <Grid container>
            <Grid item xs={12} md={6} className="sl-left">
              <img src={bestsellerimage} />
            </Grid>
            <Grid item xs={12} md={6} className="sl-right">
              <img src={bestsellerimage} />
            </Grid>
            <Grid item xs={12} className="sl-bottom">
            <img src={sliderimage} />
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
            <img src={appimage} />
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
              <img src={sliderimage} />
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
                  <img src={featureimage} />
                </Box>
                <Box className="image-details">
                <img src={featureimage} />
                </Box>
                <Box className="image-details">
                <img src={featureimage} />
                </Box>
                <Box className="image-details">
                <img src={featureimage} />
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
                <img src={userimage} />
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
