import { Typography,Link} from "@mui/material";
import ProductListing from "../product-listing/ProductListing.component";
import Slider from "react-slick";
import "./TopCategories.scss";

function TopCategories() {
  const settings = {
    className: "slider variable-width",
    //innerWidth:"100%",
    arrows:false,
    swipeToSlide: true,
    dots: false,
    infinite: true,
    draggable: true,
    accessibility: false,
    centerMode: true,
    centerPadding:'0',
    //variableWidth:true,
    //autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 3,
    slidesToScroll: 3,
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
          slidesToScroll: 2,
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
    <div className="top-categories">
      <Typography variant="h3" className="subtitle" textAlign={"center"} textTransform={"uppercase"}>Shop Our</Typography>
      <Typography variant="h2" className="hometitle" textAlign={"center"} textTransform={"uppercase"}>Top Categories</Typography>
      <ul className="categories-listing">
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
      </Slider>
    </div>
    </>
  );
}

export default TopCategories;