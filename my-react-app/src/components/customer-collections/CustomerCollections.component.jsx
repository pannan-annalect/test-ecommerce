import { useState, useEffect } from "react";
import { Typography } from "@mui/material";
import "./CustomerCollections.scss";
import Slider from "react-slick";
import sliderimage from '../../assets/images/top-slider-image.jpg';

function CustomerCollections() {
  const settings = {
    className: "slider variable-width",
    dots: true,
    infinite: true,
    speed: 1200,
    autoplaySpeed:2200,
    autoplay:true,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section className="cusotmer-collection">
      <Typography variant="h3" className="subtitle" textAlign={"center"}>Loved By</Typography>
      <Typography variant="h2" className="hometitle" textAlign={"center"}>2M + Customers</Typography>
      <Slider className="customer-slider" {...settings}>
        <div>
        <img src={sliderimage} />
        </div>
        <div>
        <img src={sliderimage} />
        </div>
      </Slider>
    </section>
  );
}

export default CustomerCollections;