import { Typography} from "@mui/material";
import ProductListing from "../product-listing/ProductListing.component";
import Slider from "react-slick";
import "./WatchIt.scss";

function WatchIt() {
  const settings = {
    className: "slider",
    //innerWidth:"auto",
    arrows:false,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    draggable: true,
    accessibility: false,
    centerMode: true,
    variableWidth:true,
    centerPadding:'0',
    //autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 5,
    slidesToScroll: 5,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          variableWidth:false,
          centerMode:false,
          infinite:false,
        }
      },
      {
        breakpoint: 899,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          variableWidth:false,
          centerMode:false,
          infinite:false,
        }
      },
      {
        breakpoint: 599,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          variableWidth:false,
          centerMode:false,
          infinite:false,
        }
      },
    ]
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