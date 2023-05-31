import React from "react";
import ImageCarousel from "../../components/image-carousel/ImageCarousel.component";
import CustomerSection from "../../components/customer-section/CustomerSection.component";
import CardCarousel from "../../components/card-carousel/CardCarousel.component";


const HomeComponent = () => {
    return(
        <>
        <ImageCarousel images={[
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]} />
<CustomerSection  images={[
  "https://images.pexels.com/photos/3836292/pexels-photo-3836292.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/2792157/pexels-photo-2792157.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/1661179/pexels-photo-1661179.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
  "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
]}/>

<CardCarousel slidesToShow={4} slidesToScroll={4} data = {[1, 2, 3, 4, 5, 6, 7, 8]}>
  <div>
   <div className="card-container">
    <div className="img">
      <img width="217" src="https://www.dotandkey.com/cdn/shop/files/vitcsunscreen_1747d970-e108-40f7-93dd-d5818262c85d_large.jpg?v=1684820542"/>
    </div>
    <div className="content">
      <div className="product-rating">
        <span classname="star"> </span>     
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
        </>
    )
}

export default HomeComponent;
