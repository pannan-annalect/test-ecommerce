import { useState, useEffect } from "react";
import { Typography,Link} from "@mui/material";
import ProductListing from "../product-listing/ProductListing.component";
import Slider from "react-slick";
import "./WatchIt.scss";

function WatchIt() {
  const settings = {
    className: "slider",
    innerWidth:"auto",
    arrows:true,
    swipeToSlide: true,
    dots: false,
    infinite: false,
    draggable: true,
    accessibility: false,
    centerMode: true,
    variableWidth:true,
    //autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 5,
    slidesToScroll: 5,
  };
  return (
    <>
    <div className="watch-it">
      <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Watch it, Buy it</Typography>
      <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Love it</Typography>
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
      </Slider>
    </div>
    </>
  );
}

export default WatchIt;