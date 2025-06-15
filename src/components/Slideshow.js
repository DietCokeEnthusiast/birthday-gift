import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./Slideshow.css"; 

const images = [
  "./images/bday1.jpeg",
  "./images/bday2.jpg",
  "./images/bday3.png",
  "./images/bday4.jpg",
  "./images/bday5.jpg",
  "./images/bday6.JPG",
  "./images/bday7.jpeg",
  "./images/bday8.JPG",
  "./images/bday9.JPG",
  "./images/bday10.JPG",
  "./images/bday11.JPG",
  "./images/bday12.JPG",

  
];

function Slideshow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  return (
    <div className="slideshow-container">
      <Slider {...settings}>
        {images.map((src, index) => (
          <div key={index} className="slide-wrapper">
            <img className="slide-image" src={src} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Slideshow;