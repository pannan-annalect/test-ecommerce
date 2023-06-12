import { useState, useEffect } from "react";
import { Typography,Card,CardActions,CardContent,CardMedia,Button, Grid, Box } from "@mui/material";
import ProductListing from "../product-listing/ProductListing.component";
import Slider from "react-slick";
import "./NewArrivals.scss";
import productimage from '../../assets/images/best-seller.jpg';
import {Star,Verified} from '@mui/icons-material';

function NewArrivals() {
  const settings = {
    className: "slider",
    //innerWidth:"100%",
    arrows:false,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    draggable: true,
    accessibility: false,
    //centerMode: true,
    //variableWidth:true,
    //autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      },
    ]
  };
  return (
    <>
    <div className="new-arrivals">
      <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Shop our</Typography>
      <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"} sx={{mb:3}}>New Arrivals</Typography>
      <Slider {...settings}>
        <div>
          <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
        <div>
        <ProductListing />
        </div>
      </Slider>
    </div>
    </>
  );
}

export default NewArrivals;