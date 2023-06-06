import { useState, useEffect } from "react";
import { Typography,Link, Button, Grid} from "@mui/material";
import ProductListing from "../product-listing/ProductListing.component";
import Slider from "react-slick";
import "./ShopBy.scss";
import ingredientimage from '../../assets/images/ingredients.jpg';

function ShopBy() {
  const settings = {
    className: "slider",
    //innerWidth:"100%",
    arrows:true,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    draggable: true,
    centerMode: true,
    variableWidth:true,
    slidesToShow: 1,
    slidesToScroll: 1,
    //autoplay:true,
    speed: 500,
  };
  return (
    <>
    <div className="shop-by">
      <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Shop by</Typography>
      <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Ingredients</Typography>
      <Slider {...settings}>
        <div className="ingredient">
          <img src={ingredientimage} />
        </div>
        <div className="ingredient">
        <img src={ingredientimage} />
        </div>
        <div className="ingredient">
        <img src={ingredientimage} />
        </div>
        <div className="ingredient">
        <img src={ingredientimage} />
        </div>
      </Slider>
      <Grid textAlign={"center"}>
        <Button variant="outlined" sx={{borderRadius:0,padding:'5px 15px',lineHeight:'normal', minHeight:'inherit'}} textAlign="center">Shop Now</Button>
      </Grid>
      
    </div>
    </>
  );
}

export default ShopBy;