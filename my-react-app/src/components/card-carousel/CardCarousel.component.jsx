import React from "react";
import { Grid, Box, Container,Link,IconButton, InputAdornment, TextField, Typography } from '@mui/material'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./CardCarousel.style.scss";

function CardCarousel ({ slidesToShow, slidesToScroll, children }) {

    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: slidesToShow || 4,
      slidesToScroll: slidesToScroll || 4
    };
    return (
      <div>
        
        <Slider {...settings}>
          {children}
        </Slider>
      </div>
    );
}

export default CardCarousel;