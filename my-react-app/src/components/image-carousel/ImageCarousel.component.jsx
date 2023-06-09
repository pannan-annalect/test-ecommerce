import "./ImageCarousel.style.scss";
import Slider from "react-slick";
import sliderimage from '../../assets/images/top-slider-image.jpg';

function ImageCarousel() {
  const settings = {
    className: "slider",
    //innerWidth:"100%",
    arrows:true,
    swipeToSlide: true,
    dots: true,
    infinite: true,
    draggable: true,
    accessibility: false,
    //centerMode: true,
    //variableWidth:true,
    autoplay:true,
    speed: 500,
    autoplaySpeed:4000,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div className="home-top-slider">
        <Slider {...settings}>
          <div>
            <img src={sliderimage} alt=""/>
          </div>
          <div>
          <img src={sliderimage} alt=""/>
          </div>
          <div>
          <img src={sliderimage} alt=""/>
          </div>
        </Slider>
      </div>
  );
}

export default ImageCarousel;