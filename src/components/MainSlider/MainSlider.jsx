 import React from "react";
import Slider from "react-slick";
import img1 from '../../asstes/images/slider-image-1.jpeg'
import img2 from '../../asstes/images/slider-image-2.jpeg'
import img3 from '../../asstes/images/slider-image-3.jpeg'

export default function MainSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="container pt-5">
      <div className="row">
        <div className="col-md-8">
        <Slider {...settings}>
        <img src={img1}  alt="" />
        <img src={img3}  alt="" />
        <img src={img2}  alt="" />
        </Slider>

        </div>
        <div className="col-md-4">
          <img src={img1} className="w-100"  alt="" />
          <img src={img2} className="w-100"  alt="" />
        </div>
      </div>
     </div>
  );
}
